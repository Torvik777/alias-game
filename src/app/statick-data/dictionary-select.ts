import { testDataV1, testData } from "./wordsData";
import { OxfordDataV1 } from "./oxfordDictionare";
import { Word } from "../models/models";


const dictionaryNames = [
  '1000 Common Words',
  'Level C1',
  '5000 Oxford'
];

export const dictionaryOptions = dictionaryNames.map(name => ({
  label: name,
}));

type DictionaryName = typeof dictionaryNames[number];

export const dictionaryes: Record<DictionaryName, Word[]> = {
  '1000 Common Words': testData,
  'Level C1': testDataV1,
  '5000 Oxford': OxfordDataV1
}
