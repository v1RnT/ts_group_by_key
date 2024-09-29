type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const resOfArr: GroupsMap<T> = {};

  for (const item of items) {
    const keyOfT = String(item[key]);

    if (!resOfArr[keyOfT]) {
      resOfArr[keyOfT] = [];
    }
    resOfArr[keyOfT].push(item);
  }

  return resOfArr;
}
