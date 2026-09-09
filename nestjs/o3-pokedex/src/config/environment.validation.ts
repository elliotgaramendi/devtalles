import { z } from 'zod';

const environmentSchema = z.object({
  MONGODB_URI: z.string().min(1),
  POKEMON_PAGE_LIMIT: z.coerce.number().int().min(1).max(500).default(10),
  PORT: z.coerce.number().int().min(1).max(65_535).default(3803),
});

export const validateEnvironment = (config: Record<string, unknown>) =>
  environmentSchema.parse(config);
