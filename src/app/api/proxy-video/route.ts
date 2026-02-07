import { NextRequest } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get('url');
  const range = request.headers.get('range');

  if (!videoUrl) {
    return new Response('Missing URL', { status: 400 });
  }

  try {
    const headers: Record<string, string> = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'Referer': 'https://www.blogger.com/',
    };

    if (range) {
      headers['Range'] = range;
    }

    const response = await axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream',
      headers,
    });

    const responseHeaders = new Headers();
    responseHeaders.set('Content-Type', response.headers['content-type'] || 'video/mp4');
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Accept-Ranges', 'bytes');
    
    if (response.headers['content-range']) {
      responseHeaders.set('Content-Range', response.headers['content-range']);
    }
    if (response.headers['content-length']) {
      responseHeaders.set('Content-Length', response.headers['content-length']);
    }

    // Convert Node.js stream to Web Stream for Next.js response
    const stream = new ReadableStream({
      async start(controller) {
        response.data.on('data', (chunk: any) => controller.enqueue(chunk));
        response.data.on('end', () => controller.close());
        response.data.on('error', (err: any) => controller.error(err));
      },
      cancel() {
        response.data.destroy();
      }
    });

    return new Response(stream, {
      status: range ? 206 : 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    if (error.response && error.response.status === 416) {
        return new Response('Range Not Satisfiable', { status: 416 });
    }
    console.error('[Proxy Video] Error:', error.message);
    return new Response('Proxy Error', { status: 500 });
  }
}
