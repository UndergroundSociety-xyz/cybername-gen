```
      .
 _.  .|_  _ ._.._  _.._ _  _  ___  _  _ ._
(_.\_|[_)(/,[  [ )(_][ | )(/,     (_](/,[ )
   ._|                            ._|
```

[![GitHub Release](https://github-basic-badges.herokuapp.com/release/UndergroundSociety-xyz/cybername-gen.svg)]()
[![GitHub License](https://github-basic-badges.herokuapp.com/license/UndergroundSociety-xyz/cybername-gen.svg)]()

# What it is

The Name object lets you generate a _cyberpunkish_ name according to gender.
The code comes from [ScifiIdeas](https://www.scifiideas.com/) cyber punk name generators. It's been rewritten in Typescript.

# Usage

```typescript
import {EGender, Name} from "./name";

const maleNameObject = new Name(EGender.male)
const femaleNameObject = new Name(EGender.female)

// this should output a string like 'firstname lastname'
console.log(maleNameObject.toString())

// you can access the first and lastname with accessors
console.log(femaleNameObject.firstname, femaleNameObject.lastname)
```

Here are some sample names, evens are male:

* Lin Highlyle
* Rick Quideman
* Larry Srilly
* Arakan Moon
* Case Mountilsworth
* Chonglin Spokely
* Far Highworth
* Johnny Clark
* Deming Day
* Andrew Quilly
