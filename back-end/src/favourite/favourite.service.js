import { prisma } from '../prisma/client';

export const getAll = () => {
  return prisma.favourite.findMany({
    include: {
      product: { include: { photos: true } },
    },
  });
};

export const add = (productId) => {
  return prisma.favourite.create({ data: { productId } });
};

export const remove = (id) => {
  return prisma.favourite.delete({ where: { id } });
};
