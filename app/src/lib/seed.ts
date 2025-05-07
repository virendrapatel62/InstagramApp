import { faker } from '@faker-js/faker';
export function getRandomImage(height: number, width?: number) {
  const _w = width || height;
  return `https://picsum.photos/${_w}/${height}?q=${Math.random()}`;
}

export function getRandomUser() {
  const fname = faker.person.firstName();
  const lname = faker.person.lastName();
  return {
    fullName: `${fname} ${lname}`,
    username: `${fname}.${lname}`.toLowerCase(),
    profilePic: faker.image.avatar(),
    id: faker.database.mongodbObjectId(),
  };
}
export function getRandomUsers(count = 10) {
  return new Array(count).fill(undefined).map(() => getRandomUser());
}

export function getRandomContent(words = 10) {
  return faker.lorem.words(words);
}
