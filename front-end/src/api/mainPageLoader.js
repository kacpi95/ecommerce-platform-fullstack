import { redirect } from 'react-router-dom';
import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from '../constants/api';

export async function mainPageLoader({ params }) {
  const genderPath = params.gender || 'kobieta';
  const gender = PATH_TO_ENDPOINT_MAPPING[genderPath];

  if (!gender) return redirect('/kobieta');

  const res = await fetch(`${BACK_END_URL}/products/${gender}/bestsellers`);
  const bestsellers = await res.json();

  const heroImageUrl = `/hero/${genderPath}.jpg`;
  return { bestsellers, heroImageUrl };
}
