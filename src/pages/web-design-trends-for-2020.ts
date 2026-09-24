import type { APIRoute } from 'astro';
import { gone } from '../lib/gone';

export const prerender = false;
export const ALL: APIRoute = gone;
