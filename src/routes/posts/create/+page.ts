import { error } from '@sveltejs/kit'
import type { PageLoad } from './$type'

export const load: PageLoad = async () => {
	throw error(404, { message: 'Yikes! 📣' })
}
