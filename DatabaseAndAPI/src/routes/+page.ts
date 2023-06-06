import type { Post } from '@prisma/client'
import type { PageLoad } from './$types'

// don't use event here, use { fetch }
export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts')
	const posts: Post[] = await response.json()
	return { posts }
}
