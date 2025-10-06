import { prisma } from '../../shared/prisma/prismaClient';
import type { CreateUserWordInput } from './dictionary.schemas';

export const dictionaryService = {
  async list(userId: string) {
    return prisma.userWord.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  },

  async create(userId: string, payload: CreateUserWordInput) {
    return prisma.userWord.create({
      data: {
        userId,
        word: payload.word,
        translation: payload.translation,
        transcription: payload.transcription,
        partOfSpeech: payload.partOfSpeech,
        audioUrl: payload.audioUrl,
        sourceLang: payload.sourceLang ?? 'en',
        targetLang: payload.targetLang ?? 'ru',
      },
    });
  },

  async remove(userId: string, id: string) {
    const result = await prisma.userWord.deleteMany({
      where: { id, userId },
    });
    return result.count > 0;
  },
};