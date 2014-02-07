NAICS 2007
==========

NAICS 2007 is a node module containing data from the North American Industrial Classification Specification.

## Installation

npm install naics-2007;

## Usage

```
NAICS = require('naics-2007');

NAICS.search('coffee');
#=> [ { code:123 } ]

NAICS.find('123');
#=> { code: 123 }

NAICS.above('123');
#=> [ { code: 12 }, { code: 1 } ]

NAICS.below('123');
#=> [ { code: 1231 }, { code: 1232 }... ]
```

## Dataset Indexing

In order to enable keyword-based searches on the NAICS 2007 dataset, we use a reverse index stored in ``/data/data-index.json``. The index is generated by tokenizing relevant properties on NAICS classifications and storing them in an index object keyed by the tokenized text. The index relates keywords to scores that represent the likelihood that a specific keyword is related to a NAICS classification.

In order to rebuild the index run the following command from the project directory:

```
$ ./bin/build-index
```

## Contributing

* Fork the project.
* Make your feature addition or bug fix.
* Add tests for it. This is important so I don't break it in a future version unintentionally.
* Commit, do not mess with version (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)
* Send me a pull request. Bonus points for topic branches.
