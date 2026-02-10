import { prisma } from '../prisma/client.js';

export const getAll = async ({
  gender,
  category,
  subcategory,
  page = 1,
  limit = 8,
}) => {
  const where = {};

  if (gender) where.gender = gender;
  if (category) where.category = category;
  if (subcategory) where.subcategory = subcategory;

  const products = await prisma.product.findMany({
    where,
    skip: (page - 1) * limit,
    take: limit,
    include: { photos: true },
  });

  const total = await prisma.product.count({ where });

  return { products, total };
};

export const getById = async (id) => {
  return prisma.product.findUnique({
    where: { id: Number(id) },
    include: { photos: true },
  });
};

export const getBestsellers = async (gender) => {
  return prisma.product.findMany({
    where: { gender },
    take: 8,
    include: { photos: true },
  });
};
