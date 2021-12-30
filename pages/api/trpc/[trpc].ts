import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

const appRouter = trpc.router().query('siemka', {
	input: z
		.object({
			text: z.string().nullish(),
		})
		.nullish(),
	resolve({ input }) {
		return {
			greeting: `Siemka ${input?.text ?? 'Świecie'}`,
		};
	},
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: () => null,
});
