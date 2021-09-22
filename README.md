# edgar-broken-txt

Get a list of [EDGAR](https://www.sec.gov/edgar/searchedgar/companysearch.html) accession numbers referencing broken/missing .txt files.

# Installation

With [npm](https://www.npmjs.com/) do:

    $ npm install @mangosteen/edgar-broken-txt

# Usage

```ts
import { isEdgarTxtFileMissing } from '@mangosteen/edgar-broken-txt';

// true, check yourself: https://www.sec.gov/Archives/edgar/data/804747/0000898733-94-000138-index.html
console.log(
    isEdgarTxtFileMissing('0000898733-94-000138')
);
```