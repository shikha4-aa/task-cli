import fs from 'fs';

const FILE_PATH = './data.json';

export const readData = () => {
  if (!fs.existsSync(FILE_PATH)) return [];
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return data ? JSON.parse(data) : [];
};

export const writeData = (data) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};
