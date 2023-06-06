import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

import db from '$lib/database'

export const GET: RequestHandler = async (event) => {
	const posts = await db.post.findMany({
		take: Math.round(Math.random() * 30)
	})

	event.setHeaders({
		// sets the freshness of the cached data to 60 seconds
		'Cache-control': 'max-age=60'
	})
	return json(posts)
}
