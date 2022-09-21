interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

/**This solution does not past the test when running npm run e 09 */
/**Type 'LukeSkywalker' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value. */