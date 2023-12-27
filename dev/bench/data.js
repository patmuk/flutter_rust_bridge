window.BENCHMARK_DATA = {
  "lastUpdate": 1703677659543,
  "repoUrl": "https://github.com/fzyzcjy/flutter_rust_bridge",
  "entries": {
    "Flutter Rust Bridge Benchmark": [
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a56090f1b2fa819be05dd7a158fcd5a93d38c84b",
          "message": "Merge pull request #1477 from fzyzcjy/feat/11600\n\nAdd frbSse bench test and fix frbCstSse test forget to be sync",
          "timestamp": "2023-12-22T22:15:12+08:00",
          "tree_id": "bfcb9ce6a8f666520c62549b36c0eb1b06342e99",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/a56090f1b2fa819be05dd7a158fcd5a93d38c84b"
        },
        "date": 1703256678238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.996207531287865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 209.1869150779896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2235.994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 11.535502736747395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.55634325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4530914607183067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24198402243436748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016213363439199886,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 374.5057105410972,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.12531835341293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 49.84672133190439,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 209.36407411284412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63651725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.904003797998101,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 134.392399834779,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.062320948753581025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.298488,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 144.04389770152153,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 34.58065910505567,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 78.30742727379507,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1998.5104895104896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68530725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 20.359830351484426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1962.4730134932533,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.588281045768551,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.6636236118839065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 159.02122754014945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.908904,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.38500491996064,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 784.637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4094595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 67.4405111897762,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2014.438,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.90711875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.733335683316295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 752.2965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.837843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.792596037019814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 486.98273092369476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.272321,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.900641241984474,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 897.34725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.931463,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.0375125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 802.06925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.523328,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 83.15790347346143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2823.8375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 5.702269021029213,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 95.73168858596524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3192.02125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 6.554383752636556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 8.870936,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 168.98575524928313,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.3663915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 63.83259158926729,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6596.170658682635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6096895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 62.751001784199595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8136.8,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.702064,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 68.36821224039191,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 12796.466367713005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.107717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 39.79220005954153,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6486.228739002932,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8028805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 321.4244511407662,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 29613.422535211266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.533304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2166.45,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 256766.77777777778,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.333294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2503.194,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 296555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.56351460100454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.30306446653685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2066.356,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.98351348542327,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3620608662079657,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.2966305764441922,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.1721286556557427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014908341694093719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 180.78974961583657,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.355399934347304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.849113485762043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 166.52535176088585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4269598410822187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5632077183961408,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.55252894942102,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05266205564438636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.2309515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.12377450980392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.08404089647234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 44.87827043037293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1743.2038327526132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48100175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 19.696971424228607,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1906.0869565217392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.040977709473091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.8620260844926917,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 65.56162722087458,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.60520525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.55679915640696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 625.73475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.98422575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 46.00303594838888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1786.6979010494751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5937695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.131065951472387,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 600.1475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5640625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.248352634060513,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 444.1811946902655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.88814775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.854683931645084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 792.14175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.471413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 21.696809425524595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 684.073,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.936372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.87607092304253,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2431.396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.276308,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 88.95221027479091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2852.285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4936484035462373,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.823831838084081,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 121.28829546150548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90885575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 74.5683694991599,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 7581.812734082397,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4760156708707777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.08939467573843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5073.1525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48185692105417105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.825283494330115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8089.461077844311,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.89844625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 33.269869817017835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4999.653846153846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.54748975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 277.0853522695628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29537.369863013697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9710837644581178,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2088.838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 223654.83333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.1332358667641333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2254.371,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 274342.75,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 45.47418293889004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1041.7425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10443.07,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 40.140368482318465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9639035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.53479,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3250530679118379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023745469244063632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 661.8818663136996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.92838724555041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.14334856749718,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 265.71436163146006,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.151478,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.598685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 186.03255943020997,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07941419604702965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4391727804136099,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.75302752293578,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.953353521036014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.22516890188565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1797.7097933513028,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.167553,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.940547225622193,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2219.655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.896850904175345,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 10.516926960088343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 96.86512664051529,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.579863710068145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 48.138741363914086,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1516.1911544227887,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.439593,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.32886565928379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3318.3094405594406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2002455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.546835625315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1111.7635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2550675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.809363143821137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 879.10375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.121342,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.10331027882901,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1380.754,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.5295852352073824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 30.973754841858053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 898.6275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.247264,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.53057453242245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3414.91904047976,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.875968062015969,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 112.02531078508231,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3383.9820089955024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.037878,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.2966440275169795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 280.0053385782523,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.98505375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 76.49421189959942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7256.165584415585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.8692285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.7330931717701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6321.4350282485875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.9244635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.34273558674751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10074.546610169491,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.312622,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.73889122217555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6931.88418079096,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6205935,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 357.3770807779919,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 37977.05454545454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.260524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2603.80875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 277415.5714285714,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.8124631406526444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2618.757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 323018.8333333333,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "229db75f5651289bf5a7468b368e04ce4d1c0b3d",
          "message": "Merge branch 'feat/11549'",
          "timestamp": "2023-12-23T07:30:50+08:00",
          "tree_id": "d25952a1a55a3abec4cb7a7066b9f90dd86f5d33",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/229db75f5651289bf5a7468b368e04ce4d1c0b3d"
        },
        "date": 1703293575904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.967930514573254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 208.58919032156697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2259.378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.01683016489060393,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.049196490758035095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.027677807654027404,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.21862381698073738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.1342995,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 12.08455486942756,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.54968175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4494449888193764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.25129663957047826,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016118160346242284,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 378.1569294762715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 35.63100603944344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 49.20775514221041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 215.99773218142548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6561435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8690020654989672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 136.35612038265484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.055283737906922994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.3076375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 148.59346208967446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 34.627053792482556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 77.86708195444812,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1979.1177052423343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.683931,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 20.32734,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1946.0014992503748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.5206135674478043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.707475350459454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 68.35530947742575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.89200875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.281137148578566,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 789.27475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4410155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 69.679008,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2028.678,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.94371975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.412412700698393,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 716.294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.92242275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 16.281757379895065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 476.45369237046106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2810355555555555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.60305808776765,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 906.22725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.9834265,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.335395655323897,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 779.578,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.292585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 89.68861465294576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2606.3575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.771615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 91.91970903101839,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3249.2413793103447,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.776762,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.435572,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 194.0301071118402,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.204952,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 70.73177889576884,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5972.299450549451,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.69742675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 58.90766464634748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8713.628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63091775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 74.5092879256966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11231.911016949152,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.258427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 35.311145510835914,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6817.6725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.73606075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 275.58803659394795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 32827.82089552239,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.220974,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2418.627,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 258824.88888888888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.303905,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2489.84,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 287158.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.55413536146616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.54433371005857,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2053.362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016674470891615938,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04525990586422028,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.027800299895748875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17146003432743875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0247945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.972067111653637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.36585740977984726,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3006786519566258,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16642647656142232,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014273405985726594,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 181.68650072674419,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.837495316960997,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 28.712903411048583,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 164.1662152179266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4294315096454792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.580070709964645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.20303593928121,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.053214339986159424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.228489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.07868937048502,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.693716299183173,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 45.27114692500962,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1649.0981038746909,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49978575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 26.026217520596695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1914.7991666666667,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9668052608080813,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.7386155750544985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 62.748360784313725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58061375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.140410376716986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 564.90875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.989471,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 44.9437744749021,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1750.6079460269866,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.604641,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.83981916131108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 600.17575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.548529,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 12.731280977954622,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 393.2898435953277,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8732215,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.441149073680094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 827.225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.466761,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 28.209723902760974,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 715.95125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.936244781877609,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.74122774342547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2431.936,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.260665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 90.83054298642534,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2898.00875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49484048244852313,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6748294125852936,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 126.24455083784805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9134515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 76.26098860441024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6032.593516209477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4882791615187139,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 53.5353359726086,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5096.92,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4721464596821222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 62.27416451670967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8694.395209580838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8804585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.994271548691835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4760.655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55925525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 300.7087872185911,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29609.652777777777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9274780362609818,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2088.592,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 215330.1,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.076067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2201.315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 298992.44444444444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 47.76309789578682,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1075.7785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10515.59,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.023907066994023233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.0576348648473027,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02683212418472254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24318661439412873,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.383623308188346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 42.680032436354324,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.99078425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.546634,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3302055499696146,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.024375791804993666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 722.721098265896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.468832862421216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.215315714356024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 264.29228329809723,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1671675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.640595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.8775020754543,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07708285192291715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4541055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.4436819471132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.35706722012792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 69.21983802865647,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1809.8065099457503,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1972825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 25.0695875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2224.15,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 7.0053415622580975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 12.290689314828128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 119.13789611627352,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.5896219551890225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 50.34203885635887,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1545.119940029985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.483136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 106.63223447106212,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3358.67916041979,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.167305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 37.7766527918401,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1151.3145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2549448725275638,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.203121082053777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 899.914,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.262751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.022294410822354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1363.651,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.697036,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.050084749576254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 904.55675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.071912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.33816556760587,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3453.991004497751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.616759191620404,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.13507637417773,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3370.8455772113944,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.8698908150545925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.036305472770896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 280.5329693406132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.62532,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 72.66228670170639,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6897.191558441558,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.80445075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.51312,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8616.978813559323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.90233975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.47639313738529,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10053.733333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.288273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.00209995800084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6650.5192307692305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.422061,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 350.81982300884954,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 36693.15517241379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.190506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2620.5075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279850.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.451718774140613,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2659.26375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 312377,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "791551a74022a745400b92ef1380db14f498ebe5",
          "message": "Merge pull request #1479 from fzyzcjy/feat/11602\n\nAllow skip all-contributor for local script",
          "timestamp": "2023-12-23T09:18:33+08:00",
          "tree_id": "03c84e864997c99576e224a84c9d8f6364d1acba",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/791551a74022a745400b92ef1380db14f498ebe5"
        },
        "date": 1703295843786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.604001516987484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.71499023939177,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2215.562,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.016624592,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04717145135374243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.026893180184005133,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.2127524091919229,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.122491,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 13.611983774807394,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5269955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.39772625507609,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24546623776106674,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016005919189977805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 352.01566349876805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.947350919973395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 42.54553383394669,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 203.26930894308944,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.65338975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.9471535264232367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 131.03204986760812,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.061689136349815606,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.288439,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 130.46340481803026,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.700798238370496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 72.71442594343053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2103.4395373291272,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68027975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 21.733066835665188,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1803.656671664168,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.844808579942677,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.221100697695396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 60.56763058289175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.9149705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.119475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 763.58725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.584709,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 60.95015528427785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2011.738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.9150949235041737,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.971112158883127,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 760.9475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.78511975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 18.06340904028446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 490.573441108545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0906807337591056,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 28.83761729906161,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 823.279,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.8075015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.317616753107856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 702.3245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.394624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 79.00738634119367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2825.46625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.442065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.25507297970807,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2861.92625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.828296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.16346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 169.95024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.182137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 66.80329633160112,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5812.142857142857,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.66686625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.957421729005546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8212.014981273409,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62087525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 73.94046148846279,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 10792.609137055837,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1136444431777783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 39.71371821570446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6112.844943820225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7959855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 301.00830765107867,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 28663.773333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4801875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2104.803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 255341.88888888888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.223925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2420.475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 269351.28571428574,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.372701018391854,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 202.54908942924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2023.554,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016999883889500755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04541924986374225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.02626214894141975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17118245915270164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0185895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.256936113250912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3514189557779698,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.29050475118981733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16168708406503327,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.01409083169715938,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 176.66928716544476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.987915643394533,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 28.313528129335484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 161.08851481958763,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4328376563655523,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5936239531880234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.6817397512941,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.09800406487340142,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.3456375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.76426861534586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.68099230858126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 43.62627606666085,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1725.5025862068965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.510095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 20.93160054719562,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1867.3988005997,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.023618653302696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.868406257708834,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 67.35304418103448,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.61070625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.026982027398272,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 628.7145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.97837175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.440566992912586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1803.5247376311845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.598637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.83958816298582,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 601.663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.57145725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.17573628345044,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 444.56164994425865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.88104275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.98721609268333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 828.40175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.5326545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.624760752392476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 705.78325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9311020344489829,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.05938774760207,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2364.639,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.276639,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.31142970927917,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2838.34625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48939009836667535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7345271327364336,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 131.20794965220273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9773705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 72.0753287038669,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6654.93006993007,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47127521091777824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 55.22010779892201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5088.3675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.502014004125767,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.561468770624586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8172.7784431137725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.920194,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.52448041079641,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4728.092657342658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5977605,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 292.8510158013544,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 30975.51388888889,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9302912848543576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2050.113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 213952.55555555556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.105991,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2201.1675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 257444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.8761247122829,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1094.834,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10194.125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022268603455462794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.056427895548576835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026392224189891365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24246157682922656,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3875975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 42.54768438743166,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9857785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.546743,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.33020415867918335,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.02426258380589933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 685.0123287671233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.55116172723908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 48.69669596552312,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 269.363367003367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.221066,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.59898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 185.05954128440368,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07688125646237487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4476835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.32361990950227,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 45.06717140990108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 70.75407690402915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1881.4844778927563,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1993175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 26.6177,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2331.591,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.823975979664603,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 11.213384241894158,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 108.27311606756172,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6303686848156576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 50.41450315555006,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1551.5419790104947,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.5487925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 108.43499059392636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3453.8140929535234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1570735,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 38.04662562699498,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1150.9985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2372015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.07083200417597,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 911.6715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.104893,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 45.052977038091846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1404.924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.885126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.391066731765708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 914.983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.205894345579241,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 114.54539318258522,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3557.7727272727275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7456779407415444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.56595495758994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3406.9775112443776,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.0062,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.174584,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279.34483242182023,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.052049973975013,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 75.05319415150323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7021.863636363636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.80982375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.14880188997637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8707.631355932202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.84127275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.83240184916856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10066.175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.212624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.30544805641555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6984.89010989011,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.5951457024271487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 367.7660280029477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 37708.96296296296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.446042,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2683.79375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 288294.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7228089578932817,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2572.30875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 318431.14285714284,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "c03314c98c7c518dbe0c8c3f73ea313d66875172",
          "message": "chore: doc",
          "timestamp": "2023-12-23T17:09:31+08:00",
          "tree_id": "06842723846daf562c91e253cdb511e50ce232d2",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/c03314c98c7c518dbe0c8c3f73ea313d66875172"
        },
        "date": 1703325707322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.86986054111567,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 227.9816808114262,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2087.181,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.019205884375161752,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04376254041247492,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.029241783970758217,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19659290481549876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.2436225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 11.300032205027374,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5704845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.44628746241628126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.255893632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.016320924438796534,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 372.78028326500186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.54237009427757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 49.98547935619314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 208.91926049717986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.66445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8731593134203433,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 130.01269265639166,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.055575872860877465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.284165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 132.08095752111245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 41.43763726018315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 76.62965517241379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2077.845275181724,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68305825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 22.45206,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1834.839580209895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.8848568246989656,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.720646793753843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 68.82354358074396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.90679825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 27.6236125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 713.16875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.7355111322444339,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 60.16776388320156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2225.51,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.86154325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.929379050139037,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 717.9315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7830333333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 17.15151424242879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 496.2839651518719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1006770398849033,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.665438838244647,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 842.67375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.950032,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.637597377419013,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 720.563,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.522248,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 80.44303998728039,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2943.3225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.477879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.78131576539482,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2863.3575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.82713775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.57341375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 164.26622898104105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4202365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 64.01486754653983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6448.0467032967035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6391235,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 59.70852059491266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8831.419491525423,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.680879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 75.40271470122978,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11683.448430493274,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2533315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 36.39347521255258,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6382.662686567164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.805781,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 274.43135090382225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 32189.89230769231,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.199515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2395.417,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 265472.2,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.30128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2489.326,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 292092.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.593259601685098,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.36004919544942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2056.783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.01730531997404202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.046261831861214506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026765993435499576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17248740504045343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.041982,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.44830833047041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3644270805203259,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3098716976405472,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16785197581081246,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.01430113998569886,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 181.1896910952079,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.948057722624196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.337572610455904,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 162.35189544605893,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.42400648862680446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5495667252166374,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 122.13099893352293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05367328124857406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.247322,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 127.61210235570512,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.080510195791696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 44.46898345784418,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1711.234388366125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5046431647076095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 20.434507523939807,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1888.3305847076463,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.061098131924642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.864869820315365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 67.52310860538132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.579932,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.301528,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 562.498,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9938415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.67321408482394,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1757.944527736132,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.6126375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.063800489596083,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 599.13025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58143825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.213295076877078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 434.93195785777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.878697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.87015421415182,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 801.29225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.5223725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.933221534227727,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 705.54375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9750752624623689,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 73.99037154092095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2419.409,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.250547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.76361694553222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2855.285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.499727171815888,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7452416273791862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 131.04641683103222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9644915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 69.81905838542359,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5869.752913752914,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49547792139696756,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.97057060330263,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5070.6825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4996176950586838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.507290217194026,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8017.416167664671,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.893156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.97898893384683,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4575.705069124424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5704245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 288.4731413837559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29550.090909090908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9285535357232322,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2114.903,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 227969.55555555556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.050625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2229.214,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 264832.85714285716,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.092228432116656,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1031.579,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10102.142180094786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.021898421824812626,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.055030634036963906,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.027761746972238252,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.23741337233602977,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3606665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 39.193556605067705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.977187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.53488975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.32361536060638774,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.02377910380976717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 642.1534510433387,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 39.800640783267994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.87071442672575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 258.0579280092891,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.120661,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.55549125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 182.3140127388535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07554167379040604,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.394383,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 180.81257413997628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 39.79038675791819,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.69227645028091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1768.202296819788,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1375135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 23.913191629360686,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2160.367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.367654924734469,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 11.195255474452555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 95.47696787436155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.495640252179874,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 48.32696244163849,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1480.9305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.414811,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 102.84717880387434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3326.8710644677662,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1450585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 37.07556239550084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1117.199,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2450815,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.06224362653824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 875.50525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.9703525148237426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.63159013153701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1375.0035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.664336,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 30.888623390415503,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 899.25575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.24046031965476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 112.30514267115113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3419.935532233883,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.058738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.25241490340386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3239.1244377811095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.21478,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.295296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 281.29645587213344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.98024875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.134374886722,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6747.185064935065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.849092,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.93383711721225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8604.684,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.829683,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.97945205479452,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 11353.242424242424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.118728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.0920645333224,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6421.535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.422766,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 351.9894865954091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 36863.44642857143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.406836,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2610.427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279693.75,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.669755997683002,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2577.9425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 327255,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2be4044320645c39186701ff20acbd48a5013508",
          "message": "Merge pull request #1483 from fzyzcjy/feat/11610\n\nFix benchmark dashboard",
          "timestamp": "2023-12-23T21:02:58+08:00",
          "tree_id": "3432262c19850f2145cf9940372829572098a730",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/2be4044320645c39186701ff20acbd48a5013508"
        },
        "date": 1703338975342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.61845914771203,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 222.23630946265283,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2066.115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.019164694971252956,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.042278648661770814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.02895405865978981,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.1917686338634037,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.212864,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 8.68353732399564,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.54470166834651,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.43917548536700285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24671657152909143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.01625761018903396,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 390.0528471138846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 35.888727390180875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 46.60733594332588,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 209.34404437931755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.637291,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.856087821956089,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 128.9082490033732,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.05427676146298696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.2662795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 139.2124796880078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.92176184257391,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 78.23505711156314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1931.0067567567567,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6627115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 19.92231267976405,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1945.1724137931035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4328395959468216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.666065613657347,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 91.44925018288222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.84693675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.335074819401445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 756.629,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.358739,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 65.15024580973464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 1978.880059970015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.89699525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.54738548937981,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 701.908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.816784,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.320990074059555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 461.8340653045637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1838895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.933011803858353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 881.6845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.8097555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.80786149017314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 756.949,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.223489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 78.82630354007594,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2850.93375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4452075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.59476083012522,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2844.72875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8091595,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.144401,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 162.26371654955898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2024825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 69.64472233596875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5869.233516483517,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6675965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 58.112142215004496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8573.378277153559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.61178525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 72.86241219642801,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11094.622881355932,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2610615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.884823707996965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6508.6,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8698495090364282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 267.98981642771,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 31375.72,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.232406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2360.013,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 230552.66666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.461711,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2233.54,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 278023.8888888889,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.607425098143725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.22608153078204,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2054.996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.017297882474053176,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.047465145857604564,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.03469762865302371,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17187277017982464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0211955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.213163733548484,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.36132129981555594,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.29395314941768663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16460209056634845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014299893985700106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 178.7822472512738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.18902958006521,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.504373995013793,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 162.24929017603634,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.43459254053637436,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5741989629005186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.10981657405748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.053667242158318945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.241449,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.23948658410734,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.40385757851796,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 43.72375497354729,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1708.7523484201538,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49415375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 19.61858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1898.9587706146926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.0642944506659924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.8251101439817385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 65.05330948121646,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5844225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.077928,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 560.25325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.987735,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.05081879672481,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1757.2398800599701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58879425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.324404148069927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 596.64725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55950675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.023273953452094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 434.5434971726838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9298295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.060637424203218,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 788.8055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.4349135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 30.135815641843582,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 711.6705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9108955445522278,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.58489160396334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2473.378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.26505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.30744927020292,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2865.6925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.51399475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7377573811213094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 124.39756835076226,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9126905,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 70.65257937020485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5908.083916083916,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.46945940610811876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 53.554006783972866,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5448.99,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47613318719785214,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.88105237895242,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 9318.465034965035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8919015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 33.155906083455704,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5518.76,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.554352,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 307.78670485378353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29783.676056338027,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9581882709058644,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2108.097,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 218558.2,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.08438,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2227.987,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 272973.3333333333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.69659905951646,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1057.35,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10488.137362637362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.021868918456262165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05698212936035741,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02706283318201171,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24210490143158728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.351719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 42.143158160900164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.973239,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.63313675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.41749845570317323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023587255494103187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 666.022977022977,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.33567342693708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 52.438673308862086,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 266.03312051077415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1482425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.6137375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 185.78584678167317,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07491786933877302,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.467855016072492,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.53527312654407,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 44.96322025134327,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 70.83541703559412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1777.5301953818828,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1986175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.697734418124654,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2262.485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.49464841238399,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 12.273954107777376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 102.57172162675009,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6810199094900453,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 48.978979346840774,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1514.5674662668666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.600985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.08184586308273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3351.1079460269866,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.251261,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.973252213982285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1140.569,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.3212485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.825823643410853,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 896.0545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.20642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.69082327776615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1407.746,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.905435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.284328161569817,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 914.52425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.054701458973906,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 109.33637663623364,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3545.9265367316343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7031669726247705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 114.1706878552372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3418.6221889055473,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.864192317903841,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.13187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 290.29860812168175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.7127525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.47450791771496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7309.811688311688,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.89462675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.84200026599282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6318.232,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.92703075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.89387290208033,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10037.5875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.155967672016164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.77569864720541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7259.225274725275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.327749,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 365.756114852889,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 39141.269230769234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.30659,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2665.4775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 284131.125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.586442060168455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2706.5575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 332781.71428571426,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15c27036a03da4d74d25702fb14a6e391df55bee",
          "message": "Merge pull request #1480 from fzyzcjy/feat/11605\n\nFurther improve code coverage by adding tests",
          "timestamp": "2023-12-23T22:56:32+08:00",
          "tree_id": "50e413b0ec553f46c6a7cc85d13ee66001adca42",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/15c27036a03da4d74d25702fb14a6e391df55bee"
        },
        "date": 1703347341294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.610023217308456,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.80314394328573,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2197.971,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.016658622641718954,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04666743862666049,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.02688032768415615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.2111217957879166,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.119745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 8.283609660331095,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.52471625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.46329174902207265,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.2524040539693429,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.014562980534602993,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 402.5377339504931,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.3188784775187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 37.4639318160532,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 215.73562722467912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.57106375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.0103604948197527,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 128.8735342828751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.048360354166834915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.3398195,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 129.223191315806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 36.5903951701427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 73.61819051825677,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2015.0654582074521,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6427955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 20.4927411885146,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1856.804347826087,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4701044879694365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 7.453471818493508,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 68.14108548260707,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.84546725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.216158838411616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 741.34425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.4720425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 59.49156028797871,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2091.867,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.84529325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.631569671119884,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 696.52375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.82625975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.348077313458806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 490.5945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0870705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 28.6749923500612,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 866.5545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.724927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.996146027941297,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 709.61025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4146170484455216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 78.76293272627365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2873.67125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.455612,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 96.93996974012104,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2849.165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.79998825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.84365875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 165.4274786260687,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2516535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 66.74751698902247,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5824.876373626374,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.673573,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.82962356313434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8436.887640449439,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63669625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 75.19858764519536,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 10878.944915254237,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.213913,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.31128450972392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6521.5225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.767371,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 267.3104186170924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 30941.493333333332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.201413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2256.858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 229358.1,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.494385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2234.148,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 303253.875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.15289816214108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 204.96966280619043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2042.254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016659056475011414,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.044922541865232375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026280818191200386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.16760095697883565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 0.9947585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 24.884015776442336,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.34872579002787973,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.28591025802836534,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16318074064325186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.013861777430691113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 169.75768120862332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 24.749928844559392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 27.844294704015148,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 158.85219601302518,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4139062948874964,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.540844,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 114.00307985216709,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05189334090322658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.209657,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 122.0871667699938,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 25.915735869593387,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 42.43042620446783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1674.789958158996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47899234628556137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 20.02909826721386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1872.7016491754123,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9298983715517541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.708252311492192,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 63.222784169932986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5583435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.006719983200043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 551.067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.043757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 47.8888044459222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1811.8793103448277,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.57803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.97610519115847,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 582.835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5300073188582581,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 12.764034502853363,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 378.84586466165416,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.849116,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.50527820777434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 780.1005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.37178075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 28.57751551360262,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 680.099,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.8671300664349668,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 71.34019319613607,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2334.722,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.241278,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 87.74160577189899,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2804.365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4878853649785281,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6284569357715322,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 130.49006150857883,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.87813625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 77.0466098686546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6394.4058441558445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4515100483386774,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 51.353322896677106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4954.305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.45801854476122505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 59.70819583608328,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 7631.508982035928,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8856266666666667,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.212976,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4651.764411027569,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55067375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 287.83390641351474,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29604.833333333332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9411850294074853,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2055.489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 215146.8,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.132113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2211.659,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 265555.55555555556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 47.42255260532941,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1050.779,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10286.77,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02189396595621207,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.055864108882717825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026475301688915206,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.24151294067896475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3545715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 38.63218790442526,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9617505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.54424175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3228677564845468,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023639977744090004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 650.8188028627196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.24327222485719,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.52778465653014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 256.7284045693749,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1307115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.65669125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 183.72971481140755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07477418530812933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.406186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 182.36651583710406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 43.430544396430044,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.25342115141794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1864.7213420316868,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1891875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 25.02594379244966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2195.242,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.618300225352672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 12.321504700649342,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 101.32377526723745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.668130415934792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.23181414548684,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1533.2016491754123,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.53025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 106.92071352502663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3293.422788605697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.221942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.88318093455252,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1134.6075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2653135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.819781691746467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 886.85175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.176665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.727152116229504,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1385.263,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.669199,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 30.754750358373744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 907.1186666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.283018,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.01657019634548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3433.8125937031487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.709249968062524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 111.63176795580111,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3316.8275862068967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.9540775229612386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.9853350109987415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 283.2555941626129,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.8781010609494695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 73.03070642527511,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6785.172077922078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.867911,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.54239388965193,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6200.943502824859,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.87242875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 68.18900539345415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 9719.24152542373,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.113705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.176298589611285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6998.826923076923,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.412547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 358.08024036762106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 37924.236363636366,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.33152,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2644.07875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 286510.75,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.588699558475331,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2665.8025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 349613.5714285714,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "a585c712a369a04595ad12a2797589482db55f4d",
          "message": "chore: readme",
          "timestamp": "2023-12-24T07:59:30+08:00",
          "tree_id": "6900a9325dbcf7c153fe5a21e27b7cca48a821db",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/a585c712a369a04595ad12a2797589482db55f4d"
        },
        "date": 1703376712137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 19.831845637273492,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.28028357135517,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2196.12,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.016742591141173158,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04557970163536239,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.027095621107113495,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19219926994854197,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.2012515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 9.372559035376707,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5471964490507768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4130162241458149,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24549010163334137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.0160235729399116,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 358.0059065688205,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.466132324888726,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 46.514326247732455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 203.0763529292314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6404795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8435815782092109,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 143.26442277044686,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.04856945129574296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.3528385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 130.11500496853262,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 41.78011739884273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 68.9132726896837,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 2146.934549356223,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62032675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 21.239284085727313,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1810.4310344827586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.8379516243008,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 6.0443991114737745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 61.91258048538881,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7807076666666667,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.69530304696953,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 691.95325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.498272,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 61.270145368393344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 1987.4245754245753,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.88699575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.202892971070288,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 744.359,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.82888175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 14.54711742017806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 508.89650476622785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0792415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 28.53307323541412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 838.58725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.682728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.21279287207128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 695.53725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.437535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 79.05047491953843,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2793.17,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.419109,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 88.83786911561579,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3060.88625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7598605,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.225311,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 164.03425734381466,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.272286,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 67.82947394525559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5860.0467032967035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.67121925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.96975635438299,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8331.134831460675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.61850275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 71.33502378177465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11060.354260089685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2284485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.495791071551785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 6816.259701492538,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.78405675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 268.2549912903658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 30833.08,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.154121,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2297.409,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 235806.77777777778,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.44155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2221.397,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 300336.5,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.57381535654616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.45218817259405,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2057.618,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016662022975006966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04625886486122341,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026778938685347472,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17192151066180672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0239515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 27.06912093117683,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3744864120164348,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.30131368493431576,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16960033005037287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014279446985720553,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 189.8374145785877,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.938689129159332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 30.871145000463063,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 168.11893754728084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4314281341635956,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.575880462059769,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 123.1311324799412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.06495937650593434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.24214,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 132.71198521647307,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 28.144364859350155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 46.56612339930151,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1708.1912894961572,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49420375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 19.809165547708613,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1897.892803598201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.0101675019823464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.865752396127222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 67.26517571884985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58623925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.335784,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 560.72875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.0026025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 45.361390482618965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1786.7196401799101,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.60300175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.02159834341201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 600.451,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55364675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.033395933208133,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 437.26973415132926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90701975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.513874673689294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 808.24775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.50405975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 28.715858273133815,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 705.298,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.935929,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 73.29113226268788,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2423.588,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.266291,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.14190893402363,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2857.97375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.51795775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.675513412243294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 125.59575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9091855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 73.20067228252066,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6325.820448877806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4844430261778966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.204519682488254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5962.370879120879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.47428172292922005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 60.31727365452691,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8839.576779026218,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.91270175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.521088,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5367.852,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58905725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 289.1131965662738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 29877.222222222223,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.971783514108243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2094.189,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 234201.7,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.0676025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2248.165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 266624.1111111111,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 47.4745065215875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1047.52125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10114.834123222749,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022082624972396717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05575746355394029,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026526278973473722,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.2399061741085616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.3536755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 40.34470377019748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9946445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.6050475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3244210722566288,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.02375331824406167,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 655.5571943625041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.53746625129803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.22154406516871,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 261.17354400626795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1635465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.6375875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.23514259429624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07506835933644043,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.418865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.3001809954751,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.601337678658915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.5276521034506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1843.8562211981566,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1961585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.261657906736747,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2256.738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.3240506809421575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 11.872407365634164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 96.66106036440965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6324506837746582,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.093490457407455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1530.5104947526238,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.426001,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.54110550673391,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3300.3478260869565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2229875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.84432522430858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1131.9005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.275116,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.7027677833933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 885.54675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.191915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.446088465646135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1390.375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.828733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.22342948370197,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 903.69025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.19433,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.97732281637862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3479.592203898051,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.772437170672122,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 110.29872023327394,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3352.0119940029986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.00372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 4.033276225042831,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 285.5195296094078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.783401608299196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.9853001837477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7295.707792207792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.88164175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.48672015719666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8723.559322033898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.900018,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.75007818744136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10345.627906976744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.202073,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 43.61822393166025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6884.744505494506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.5916295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 355.71763061331467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 38108.90909090909,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.175094,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2666.3775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 279479.375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.611754041184469,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2618.79625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 320411.14285714284,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "159a2e045ded25993ae302da03ee06d599713813",
          "message": "feat: doc",
          "timestamp": "2023-12-24T09:03:25+08:00",
          "tree_id": "5bea752875f52cddd5c9b7224192d6d68951a99b",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/159a2e045ded25993ae302da03ee06d599713813"
        },
        "date": 1703388002548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.5908203757319,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 221.58029384567965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2059.536,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.017976944,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04226014966650979,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.026709404151408905,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.1931773539605286,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.209506,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 8.521770994448067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5489420896084632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4011097998261983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.2675342423868497,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.014619363945177386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 362.9208998548621,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 43.15615829449335,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 37.671934450932376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 219.62929614582188,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.5955755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.0509707245146376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 128.07969005921632,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.05386761556905908,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.268886,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 145.34387460470234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.70190752224319,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 77.46264378945737,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1984.2301587301588,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.67877,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 19.93089260468971,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1934.7181409295351,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4833152258264786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 7.323619772308661,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 63.965490773019475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8530445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.23583599769701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 761.13875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.377984,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 67.7849375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2022.7886056971515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.86816625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.31312347985477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 716.90325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.83100725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 16.282712,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 496.67775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0997715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.10998781004876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 890.874,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.757743,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.080552194478056,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 707.49475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.3003346690393136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 78.43245152680744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2560.9625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.458605555192593,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.68000178994943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2854.525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8172115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.64514125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 176.74092558983665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.186285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 68.18577761244924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5842.5329670329675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68508275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 57.738607940660664,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8428.513108614232,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.65470675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 72.97917913503638,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 11153.59192825112,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1566725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 34.584454564272406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5994.025423728814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7132906666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 297.9059748001626,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 28239.56,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.353642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2100.933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 260543.22222222222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.264236,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2408.293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 275762.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 20.552259611935096,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 206.1109627042022,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2053.385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.017293343474059985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04692752085921744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.03463389565366105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17095616223619603,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.024776,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 26.543271974412402,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.36719711002998145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3060598629454735,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.16965669656611315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.01428041998571958,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 181.40050789044076,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 28.55691358729796,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.423859473614524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 166.62045984671775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.45947749070664207,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.5706807146596427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 121.34285195716619,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05330723888696675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.285435,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 132.05634463352538,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.42874887679053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 44.30706690296854,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1744.4742807323453,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55047375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 23.23495212038304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1902.1446776611695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.055679067544441,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.8390272361941724,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 64.08003588478421,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.64318425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.473939208486332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 592.76025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.0146465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 46.66013477770878,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1740.047976011994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.62475925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.404991956320384,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 610.4745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.61314825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.80232439535121,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 444.0707646810308,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90058925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.61195906329679,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 800.697,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.534624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 22.281421998624012,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 713.8725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.949067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 76.46895424836602,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2422.067,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.299487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.22018673392628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2858.6925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58699525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.803376348311826,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 124.40838482416123,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.984463,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 73.24268677275528,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6125.821428571428,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5399005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.33059597688851,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5102.13,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.52830925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 61.44355375400811,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 7960.5329341317365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.92451975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.85025756024635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 4726.91011235955,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.57386375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 285.12717164697705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 30518.159420289856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.012135743932128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2088.413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 215554.11111111112,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.139062,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2229.969,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 280777.22222222225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.62750857733703,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1036.504,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10381.46,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022342165705315668,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.06077142462572865,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026548600688053942,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.252011749629295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.411105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 49.12635095303596,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 1.01030625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.603601,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.35963775988745345,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023959919808320643,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 675.1535605804927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.450880829015546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 45.87403091884949,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 264.7728355837967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.142157,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.65659875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.55797435660918,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07499315158760615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.425452,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 182.00664240218381,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 40.0383760735091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.86372917078312,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1788.9142091152814,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.161856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 24.83635770455287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2186.827,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.721240737317897,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 10.472277346961215,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 98.91661721068249,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6068306965846517,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.15606242496999,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1511.5855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.420114,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 106.35068928406703,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3292.839580209895,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2060395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.89353883076461,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1122.4645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2987665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.941276219790243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 885.50225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.084515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.41957022924007,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1392.2285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.773986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 31.090066184768354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 907.23075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.084012,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 112.17198895027624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3535.8846153846152,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7641106769169923,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 113.30253878702398,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3336.146926536732,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.8771950614024693,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.9785815428369142,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 283.771692745377,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.81612125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 74.1437828497372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 7004.86038961039,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.86200025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.01402863777089,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6506.095808383234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.879994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 67.6530327757378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 9438.348,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.160004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.40064813606507,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6701.706043956044,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.330431,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 359.07543179414876,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 36640.38596491228,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.094282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2624.2275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 284084.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.473134895148829,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2560.885,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 318319.14285714284,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a8c44c0a8351d1d34f83e50aa5886f1ca07e780",
          "message": "Merge pull request #1485 from fzyzcjy/feat/11611\n\nFix performance bug (for the benchmark case of transferring 1MB data from Rust to Dart)",
          "timestamp": "2023-12-24T11:45:59+08:00",
          "tree_id": "1cc0366f78c3aa186ffdfdcbd5773d09c3feaed4",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/5a8c44c0a8351d1d34f83e50aa5886f1ca07e780"
        },
        "date": 1703390307939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.14256033610353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 205.86061289330738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2234.057,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.017081954888967292,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.051180174448819823,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.024019247807846016,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19113414308865856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.05073925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 11.17124967184454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.51887425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.3880604369961611,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.2838916557950467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.014532095695504642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 398.8530408773679,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.15406547865727,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 38.62773045947042,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 210.49389602189012,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.61457125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8517658333333333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 143.08127500158741,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.046993992409293556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.363614,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 129.04737403526386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 38.350092038656236,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 45.50419766568835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 264.86875910475436,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62989225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8069448465275768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 483.0638333333333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.3503431499283147,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.979784574627014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 45.45502272727273,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.90237925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 24.2527375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 785.08,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.419041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 69.07618939048487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2003.6416791604197,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.92683725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.133931082586148,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 700.63525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.81927925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 14.713190720855675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 474.60136157337365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1064818753147976,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.11862357651708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 804.3235,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.225233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 20.26841,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 694.109,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.192797,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 87.59042120354943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2540.1975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.690401,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 88.90650028762335,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3064.4725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.846682,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.2291836419076287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 183.2660478834143,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2633825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.120345659740755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1288.1685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7080085,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 56.97372807141445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8267.059925093634,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62387575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 71.874624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 9091.67372881356,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.210943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 32.51109052795788,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5213.926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.77344825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 220.19380443170544,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 27615.036585365855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.164703,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2391.136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 223813.4,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.486388,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2230.811,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 264190.71428571426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.758993238305784,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.33791124321002,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2056.179,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.01668875989152306,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.043212051274667436,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026684626166442172,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17565107471487357,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0714145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 26.19758196560261,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.35296649435081445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3087743055736771,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.1712064210019438,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014461397985538601,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 179.27671208318392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.642249130799666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.309519622497728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 155.3998912283428,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4184898598129672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6594394202802898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 128.18582265570217,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.052687228762378795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.188546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.63531750813351,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.746670054562962,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.721423051774355,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 78.03433342436892,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49512775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.8103153448423275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 439.37571192357154,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.1291454461837196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.351074147000911,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 51.17206529526149,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.62340575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.897964739755636,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 564.66225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.099062,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 52.270734751182985,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 1721.3973013493253,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.6166225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.828736678158304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 587.44175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.55084675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 12.80810625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 428.9816200042744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9130055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.031454960681298,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 793.97675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.86249225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.906781065665676,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 624.90725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9649742675128663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 74.56019518736497,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2432.329,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.223963,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 90.14498590414821,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2870.90625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4921010379739377,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 4.9428140714824105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 123.36283131418732,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.89337175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 4.116628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1317.35932033983,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4937448173386091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 52.650514489710204,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5720.684065934066,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4800242079585354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.20273378985662,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6786.838323353293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.899802,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.47418710086287,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 3899.554195804196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.54235475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 212.00655599027175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 22593.340659340658,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9567925216037392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2114.032,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 212498,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9953125023437488,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2180.741,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 233598.33333333334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.4432484647761,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1040.50325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10255.836653386454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022582482977417516,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05894996640835091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02660459097339541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.23496263007846416,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.278844,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 38.79919686505781,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.985426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.52888475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.35522050760335444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023951693928144918,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 654.57722513089,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 40.68481864968775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 46.95614302819712,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 257.7922412682047,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.131128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.62137,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 183.95344986200553,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07559633578880717,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4291315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.28823529411764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.22230924605301,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 47.675947556615014,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 129.044325440351,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1516675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.8083925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 616.32,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.864232614649616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.892912956999432,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 81.85405582385201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6940451529774234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 52.81199625604493,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1628.4715142428786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.61467,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 107.52963834795635,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3694.124125874126,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.279803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.72065488853945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1118.7085,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.3087015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.878726197324365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 916.446,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.278233,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.7186113702027,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1395.7255,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.0290617354691323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.051726982730173,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 887.42,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.04004871996346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.32120014559825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3342.634182908546,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.809589642807768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.91472287609673,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3202.457271364318,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6584914207542896,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.7272347045739718,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 283.0535207056361,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.309557,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 6.62361834685872,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1984.4842578710645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.81552075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 61.82925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6168.200598802395,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.829879,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.518208,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10563.413793103447,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.057787,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 41.668354482277934,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5621.71072319202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.452959,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 287.78140667526145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 31766.530303030304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.9250230562327078,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2584.02,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 270927.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.3170278414860794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2605.19125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 298411,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "a71452c8a1b8e76836c6225655f644753aaf4732",
          "message": "bump from 2.0.0-dev.3 to 2.0.0-dev.4",
          "timestamp": "2023-12-25T20:33:58+08:00",
          "tree_id": "6caa0a176d622e9835d50f2d7735cdebe5a91bea",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/a71452c8a1b8e76836c6225655f644753aaf4732"
        },
        "date": 1703508445312,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.65045463374927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 205.65173132414236,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2058.4608333333335,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.018831596971752605,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.04588732286233803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.02727808324318048,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.1692256927309723,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.05799125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 10.273562226468593,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5185625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4351699210211134,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.24664339178866831,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.01556121355548483,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 358.56579419146647,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 34.06373267023197,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 47.75948611409604,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 219.65769822095322,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.638386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.9253495373252314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 136.57985531441292,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.05291349236503809,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.7299138850430575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 138.14965175378052,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.339406567761294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 47.635196608474054,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 361.2264764312805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6941775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.671794914102543,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 480.01825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4215579085014802,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.3673080786464835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 95.8193619467331,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8697825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.31470948232414,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 771.80925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.3826505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 70.1778125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 1960.825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.904229,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.45801330344346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 772.17525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8247405,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 15.505808,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 504.7385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1015957627287203,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.517809786282566,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 828.479,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1895645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 20.12701,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 698.0315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.185191,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 89.62608315446379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2539.52125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.7199775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 88.687566749733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3066.34625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.77021625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.326079,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 190.1334663246889,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.417628,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 3.9435502923372807,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1599.5506666666668,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.6767685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 56.26308273834523,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8414.21722846442,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63051525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 63.743003078645394,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 10280.735426008969,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.0922615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 36.18435463689693,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 4728.0975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.7849375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 222.18369816301836,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 28270.914634146342,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.147808,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2253.489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 209774.4,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.474715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2306.361,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 249835.55555555556,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.77350636857246,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.83499026340064,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2054.156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016499174892755365,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04331914591336171,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026705122936214805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17627122540762505,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.070831,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 26.248001889838182,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3583999083832059,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.31799995834200545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.17596825186673035,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014481837985518163,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 183.35478547854785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.970709999325738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.329662272147353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 165.5182058920887,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.42798774860061256,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6449209275395362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 130.30711732206694,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.06513734843486266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.160872,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 120.21011579768404,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 27.315823977710398,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.64509004669088,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 78.71636034475974,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.50801425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.887448306275847,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 493.22366621067033,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.077184003190555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.46979564921016,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 48.92856793385195,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.63410525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.8922038623691,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 574.84275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.104862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 51.93994072071135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2116.954,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.68073275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.452090020257334,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 610.3245,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.583754,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.29486437824592,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 453.3262921348315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.969957,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.576732818687063,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 796.52375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.86934125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.871652123043923,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 631.3375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.964131267934366,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 75.52746840664491,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2459.489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.226586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.66626392804403,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2921.11875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49054140519406764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6752719123640438,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 131.98369138066545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90907725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 4.167626,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1420.7091454272863,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48526387487251615,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 52.785121797564045,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5327.11,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4887545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.21089151682056,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6954.230538922156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.941246,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.95452670483608,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 3848.63986013986,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.54382175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 213.50670926517572,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 22987.505494505494,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9740597629701184,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2098.741,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 212681.9,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.016553241723379,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2169.974,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 236063.22222222222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.31762460038179,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1039.64875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10189.93717277487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022069233955861533,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.058874837351722616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02712727766090903,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.2356204375121168,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.275616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 38.386933323097004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9756115,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.53422375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.33006743383954773,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.0236131877440967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 643.0575377692061,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 39.51117169442304,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 47.3395900397652,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 257.66069818369186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.110535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.627585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 182.96468112361606,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07546304054270607,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4028205,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 180.9061456547243,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 40.572492139162186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.76818374101077,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 120.67358513334138,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.162362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.78822375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 614.125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.972201886674057,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.8993506749978275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 82.50313505486346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6708521645739176,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.38765710365779,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1532.9752623688155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.63333125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 106.98054907780369,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3276.0134932533733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2174625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.60654114767082,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1095.637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2026795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.359524623803008,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 923.76675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.129483,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.337653279334006,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1401.5525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.079776,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 27.71886723396468,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 894.1855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.91119806660145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 103.37424963775617,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3344.1409295352323,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.4706997646501176,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.43660704241196,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3210.6281859070464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6088466955766523,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.673500994874254,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 284.3434879821129,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.446183,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 6.484616288459279,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 2089.7593703148427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.797462,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 62.75625406863201,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5770.252747252747,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.85980175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 66.23649658758531,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8737.78,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.8957395521302238,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.409189397160965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5555.719780219781,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.348064,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 284.8848732148062,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 31817.64285714286,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.9345307991019007,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2584.59375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 271300,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.369127315436342,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2614.57,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 297924.4285714286,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "a8e8d901cf57a4ae5b421522ec56475db6d708ed",
          "message": "chore: doc",
          "timestamp": "2023-12-26T21:07:34+08:00",
          "tree_id": "7d2967d57d0c912f53a2ad62403d9a6bb6c6eb98",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/a8e8d901cf57a4ae5b421522ec56475db6d708ed"
        },
        "date": 1703598038912,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 20.628532314608403,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.5600534264872,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2234.049,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.017221501474167747,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.05194082069805918,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.02327702343016893,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19211461418495124,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 0.9955295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 10.214634470219307,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5414055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.4450269689344282,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.2587594201415768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.014929672661290378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 370.1876387860844,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 39.91486219490291,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 37.80761814744802,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 254.36830726185934,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.60259875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.125185437407281,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 144.2875527275327,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.052415125119990344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.281406,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 134.09906284137296,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 38.575702052152444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 45.49939713811224,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 298.0837555886736,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63350775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.8258733370633315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 773.50075,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.658153487098652,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.366513693366402,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 50.79950218429341,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.908453,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 25.961333798332753,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 710.772,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.6058666666666668,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 62.98115106597127,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2125.505997001499,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.91192625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.762422796971503,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 759.2695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.790186,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 17.26264,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 467.0134821013482,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2437105,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 26.159144090270917,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 881.178,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.211602,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 20.14169,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 694.346,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.182281,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 87.54686574238654,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2545.3225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.642218,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 89.69635824594009,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3077.13125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.78405675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.302108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 163.64890127910792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.3129355,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 3.568543215728392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1818.799100449775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.65875525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 59.05008616062601,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 7823.932584269663,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.70224125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 63.17040625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 10160.1327014218,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.079515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 37.29673140066329,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 4652.78202247191,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.777748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 249.8537096240767,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 24813.268292682926,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.429001,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2027.885,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 231337,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.24428,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2499.755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 249105.22222222222,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.690978549426966,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.4767858973045,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2055.267,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016679255891584838,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.043213236913573524,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026815826684914036,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.1767424661628767,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.097488,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.885522364878856,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3511043587715146,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3129143489875362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.1778360442061002,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014463966985536033,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 178.8370886981402,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.67722185911886,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 28.852650105311753,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 163.20807833537333,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4193468565649432,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.668454415772792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 129.56857479696097,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.05212067727031052,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.19364,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 119.02393648536557,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.956115641215714,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.69695754822041,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 77.82859255223939,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5007932308286621,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.787684106157947,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 471.20716934487024,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.0846492681838744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.4057806096488643,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 48.59600058314705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.626999,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.947596379926246,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 575.14525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.114378,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 51.29005,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2069.2316341829087,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.66898425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.018193340808267,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 624.3405,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58504975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.463239452183013,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 447.955905511811,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.96336025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.388237864691746,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 794.7545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.86564125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.85079,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 629.75375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9687122656438671,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 76.60275117799057,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2474.107,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.23716,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.85074022409216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2878.90125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4968589364790122,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.7066901466549267,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 118.42070796460177,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.8988225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 3.818486636135023,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1403.9122938530734,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48497712226404427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 91.49080428218501,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 8868.739910313901,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49109596103424236,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 54.335817268751015,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 7037.251748251748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90244575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.65119680202798,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 3995.576923076923,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5255905,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 212.86698615548457,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 23230.786516853932,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9547975226012386,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2102.168,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 211561.1,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9947957526021236,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2198.834,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 235412,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 46.70507601370777,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1058.95575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10295.565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022177363977822637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.059532694148645156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.027191669864041652,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.2356849575570175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.281887,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 40.80712886640006,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.96358175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.53350325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3350577456177818,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023757213976242787,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 644.0969092079846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.565214680576915,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 47.45978975344676,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 261.12415143603135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1364285,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.63280375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 183.98247706422018,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07597367956315135,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.438291,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 180.9868610511159,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.79399178363574,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 50.63108197053314,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 122.40055079559363,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1936355,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.820785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 617.01,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.91449897665671,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.781851997400869,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 83.43344596003837,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.748073625963187,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.536888998886276,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1521.891304347826,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.6868675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.36335655272963,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3311.6431784107945,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.258352,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 37.26185922675967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1105.1145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.2058325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.058681089232376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 893.12125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.151161,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 44.147080323357414,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1397.5815,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.975775012112494,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 27.95136429181425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 888.79875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.981518263861302,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 103.9741365797586,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3328.935532233883,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.7734591699056224,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 104.84392971246007,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3231.1784107946028,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.607893446053277,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.7640144269891795,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 281.11744236624617,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.476434,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 6.619653355779949,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1980.3133433283358,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.81017325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 61.8462531902463,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6470.564935064935,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.83111675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.9500506243672,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8417.928,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.078309,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 41.230602078678174,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5516.24,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.404967,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 287.17138707334783,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 32270.53125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 4.02572,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2592.78625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 266618.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.5145162427418786,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2618.86,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 297469.28571428574,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5236035+fzyzcjy@users.noreply.github.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4581cd1c55cd3dccdd0e4f0bf625f3468f6a39ae",
          "message": "Update CHANGELOG.md",
          "timestamp": "2023-12-27T10:21:50+08:00",
          "tree_id": "03cf92d21db5b596abf1d7e41e38e3cb117e4bd8",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/4581cd1c55cd3dccdd0e4f0bf625f3468f6a39ae"
        },
        "date": 1703644471465,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.68911931476565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 206.0442022144022,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2214.702,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.01709508489315572,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.05230834694769165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.023332119930003642,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19189025621702643,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 0.996568,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 13.948773921776489,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.51718925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.47229437541839775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.25399823196801413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.015999464920002676,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 363.5103598691385,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 40.41228531016367,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 41.10077885781221,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 245.73952574026293,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.579439,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.555065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 144.49852401180792,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.05260418536874978,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.25653,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 144.16661146074858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 35.025253055934996,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 54.36927091828413,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 377.7976955043445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.70092925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.664269417865291,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 505.2994066636239,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.3499068262409266,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.78517270832785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 81.47376568355874,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.89323775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 22.962820704486127,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 775.36,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.439916,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 66.73246717599159,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 1990.845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.9145225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.343572110353392,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 761.10375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8380715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 14.93136,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 497.2565,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1057041267586338,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.245091289269684,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 829.0825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.255847,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 20.20591219852195,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 694.54475,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.171387,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 86.91311130177053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2540.21375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.601212,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 88.31098721182353,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 3041.56,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.844924,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.15699,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 191.33405327573794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2369825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 3.9264545551590837,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1322.2235,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.68610625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 56.321181576368474,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 8353.823970037452,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.63851,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 70.36784578070369,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 9094.663677130045,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2230155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 32.62787825606526,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 5275.202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.73773625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 247.03583827976257,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 25020.036585365855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.428829,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2036.343,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 233780,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.224976,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2252.147227533461,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 249709.75,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.695242764247194,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.31474838577432,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2066.772,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.016500032892749785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.043095449525950055,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.026700551686268517,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.1749205305253261,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.070974,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 26.489834571727528,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.35963482689240234,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.3132033697850686,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.17382556630872167,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014474137985525862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 180.8945464411685,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.745887827970794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.50157095865355,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 164.42074975337061,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4260639386216656,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.643676678161661,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 128.9438209494324,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.06574912740902443,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.1659755,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 118.39789683938433,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.978835336489823,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.368232478230862,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 79.9651367343675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.5044094049955906,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.8874828062585969,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 464.86028602860284,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.083389758472625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.3393657748618897,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 50.820611850797846,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.62362125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 16.924529547160784,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 579.0845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.0958,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 51.974423704610366,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2106.377,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.66626175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.502627978976168,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 610.61125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.58331025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.5966382184898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 424.4514522821577,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.981181,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.86224399873101,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 801.06525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.86095975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.88594549797689,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 630.3465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.951492274253863,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 76.77746153528854,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2417.746,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.229427,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 90.25626603068892,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2863.765,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48753161337748485,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6614584192707904,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 118.69078089821069,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90630525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 3.7860714104464424,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1359.1879060469764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4802057630138681,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 53.468014627941486,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5162.9925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.49304025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 53.900385191525785,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6782.688622754491,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9024415,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.66403418970084,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 3842.335664335664,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.53180525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 212.71386274717142,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 23059.494382022473,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9375445312277344,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2114.643,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 211554.1,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.008915995542002,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2187.77,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 236159.44444444444,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 45.896034761243946,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1050.689,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10239.966824644549,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.022694546221631817,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.058848626352665113,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.026351969736480303,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.23371332914943,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.270034,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 40.61096897335933,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 1.0077585,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.535609,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.35222475458432023,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023684192428947422,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 656.6651346027577,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.96160543818056,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 47.60172315308454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 259.8900727650728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1876695,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.6433225,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 183.88036697247708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.0752879182978284,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4212655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 180.62349968414404,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 41.831524126247096,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.631486214854704,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 130.86011515310128,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1313465,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.75842875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 613.855,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.643557088000425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.537944030905494,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 83.3691538140892,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.7609383695308152,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.99737656230665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1539.1295,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.65078625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.26763964720706,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3260.047976011994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.255781,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.66850990053837,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1101.503,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.401702,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 29.632727111819108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 897.31975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.333117,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 45.8998309006764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1420.7145,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.406315,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.175640743592563,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 880.25425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.8673150995136756,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.72686814324156,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3345.5862068965516,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.643729178135411,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 109.02568474315257,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3190.6371814092954,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6574511712744144,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.863622602283048,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 282.28982671883733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.359938,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 6.471686820782948,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1991.1634182908547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.8019965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 62.265724293995476,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5923.706043956044,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.8380875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 65.97098599323812,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 10624.555,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.230706,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 42.74732195289877,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5547.3675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6017411991294004,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 289.0113947785951,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 32306.203125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.904962821277884,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2587.82125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 266413.25,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.357268321365839,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2621.20125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 303167.85714285716,
            "unit": "Microseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "committer": {
            "email": "ch271828n@outlook.com",
            "name": "fzyzcjy",
            "username": "fzyzcjy"
          },
          "distinct": true,
          "id": "2cf7d1774f2557876d530bfbfed1fdd01b732b94",
          "message": "fix: lint",
          "timestamp": "2023-12-27T19:35:50+08:00",
          "tree_id": "8754fa24140effa6513028697cda361dc94cc80e",
          "url": "https://github.com/fzyzcjy/flutter_rust_bridge/commit/2cf7d1774f2557876d530bfbfed1fdd01b732b94"
        },
        "date": 1703677651562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Windows\"}",
            "value": 18.783080039589674,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Windows\"}",
            "value": 205.6205319645357,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Windows\"}",
            "value": 2236.709,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.017173458642665885,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Windows\"}",
            "value": 0.05215473894784526,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.02342180374414455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 0.19158856170795477,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Windows\"}",
            "value": 1.0552725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 8.55338157433305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.5465975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.39085866848483464,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.27608089734579794,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Windows\"}",
            "value": 0.01453052998546947,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Windows\"}",
            "value": 422.6840659340659,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 33.39087099520844,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 38.21588933259453,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 236.37974234724027,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.577537,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.1430061784969108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 159.13334293325653,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.04693586740971496,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.358526,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 129.81288442861768,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 34.84679850161164,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 49.79658400557713,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 362.26372034051803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.66304975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 1.5926062036968982,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 818.362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.328487752742666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 4.332577298594728,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 158.81989994441355,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8613495,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 27.42230777692223,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 714.32,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.510133,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 61.87745142892,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2420.299,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.9290655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 23.38034895720834,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 782.81275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.77945775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 16.821325000724993,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 504.7105200664925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1169432552396812,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 29.303511321909426,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 832.44275,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.1957265,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 20.56159735960066,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 714.27175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.4182741666666665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 78.97310807145348,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2895.455,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.44022,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Windows\"}",
            "value": 97.00475184794087,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Windows\"}",
            "value": 2802.247376311844,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.8165195,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2.123131,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 161.15187772321738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.2893,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 3.604684046486965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 1759.928035982009,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.62172825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 59.65885482290354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 7854.741573033708,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.710707,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 54.01914250229494,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 9340.144,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 1.075466,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 36.63046198345764,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 4676.449438202248,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 0.76938575,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 239.98748615725358,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 24924.189873417723,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.163404,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2267.157,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 224434.2,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Windows\"}",
            "value": 2.2404649477506804,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Windows\"}",
            "value": 2495.376,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Windows\"}",
            "value": 252528.875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Linux\"}",
            "value": 18.6909507996559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Linux\"}",
            "value": 205.33823076132745,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Linux\"}",
            "value": 2061.733,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.01659761389211551,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Linux\"}",
            "value": 0.04332729441334541,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.02681607843491108,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 0.17676722866163858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Linux\"}",
            "value": 1.0656085,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 25.99116309291748,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.36378393366565925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.314093325665824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.1767478833823622,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Linux\"}",
            "value": 0.014463637985536362,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Linux\"}",
            "value": 179.5659005207398,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.833619556175705,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 29.413430004264892,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 161.66529259618494,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4245899547184616,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6296464351767823,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 127.7040861860139,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.052378871266695805,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.1573205,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 117.83041825095057,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 26.898539419533584,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 28.8876419100442,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 79.11292619254806,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.50064775,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.8953480523259738,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 491.9484332593141,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.1051644922082637,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2.4770483011791984,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 102.49720699021165,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.62317325,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 17.033336733306133,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 583.972,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.0811629594185204,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 50.835825,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2061.605,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.658604,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 18.476898315588898,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 614.053,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.585341,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 13.466827432449122,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 451.0087150837989,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.96531175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 23.64696205952507,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 798.9965,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.88513675,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 19.959011358650613,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 631.42725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.948751025624487,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 75.65667274661803,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2425.332,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 2.212299,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Linux\"}",
            "value": 89.86440904236383,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Linux\"}",
            "value": 2856.44875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.4938611653137106,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 1.6485179257410372,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 121.10436203037086,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.9017175,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 4.134682,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 1301.414,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.48823528694853097,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 52.969843120627516,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 5626.791208791209,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.482535,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 53.73983522362508,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 6617.679640718563,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.90982875,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 32.52776,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 3840.0244755244757,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 0.57012375,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 211.94786930316167,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 23549.876404494382,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.9334802832598583,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2097.262,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 210921.7,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Linux\"}",
            "value": 1.984559757720121,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Linux\"}",
            "value": 2182.294,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Linux\"}",
            "value": 234604.66666666666,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"90000049\",\"platform\":\"Macos\"}",
            "value": 45.866981662729216,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"9000000001\",\"platform\":\"Macos\"}",
            "value": 1040.975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"PrimeNumber\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"900000000013\",\"platform\":\"Macos\"}",
            "value": 10134.025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.02223728097776272,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"IntParse\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"1000000000\",\"platform\":\"Macos\"}",
            "value": 0.05939733008931341,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.027486653972513347,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 0.23502605114746092,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Base64Encode\",\"approach\":\"Na\",\"direction\":null,\"asynchronous\":false,\"arg\":\"100\",\"platform\":\"Macos\"}",
            "value": 1.2772655,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 40.28178687236914,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Frb\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.9765545,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.590091,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"FrbCstSse\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.3300075998463277,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":false,\"platform\":\"Macos\"}",
            "value": 0.023489812744127547,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"VoidFunction\",\"approach\":\"Raw\",\"direction\":null,\"asynchronous\":true,\"platform\":\"Macos\"}",
            "value": 654.9924688932548,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.09705325194696,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 49.73212154366421,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 262.66040709126725,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1028645,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.57127,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 184.3623174927927,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.07650896760236549,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 1.4136835,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 181.01166651709593,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 42.29630334559912,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 50.371127789251,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 121.50249058437613,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1500845,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2.8761025,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 622.478,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 6.259320113669083,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 7.390092856377456,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Bytes\",\"approach\":\"Raw\",\"direction\":\"Output\",\"asynchronous\":true,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 83.91303070985064,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6815516592241704,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 49.73141937878975,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1541.0665,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.632305,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 108.14447513812155,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3325.3933566433566,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.247858,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 36.698293639930654,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1102.4065,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.1970434014782994,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.80885914684512,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 922.515,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.221533,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 46.13576669196624,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 1438.2715,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.097454,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 28.082683503898977,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 900.94125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.8433523674857244,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.52654568145182,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3355.410794602699,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.6405551797224103,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"5\",\"platform\":\"Macos\"}",
            "value": 105.59113057760744,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"BinaryTree\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10\",\"platform\":\"Macos\"}",
            "value": 3187.4437781109445,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.6267139366430317,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 3.660535254598559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 284.73323883770377,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.349384,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 6.603490991272522,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Frb\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 1994.8343328335832,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.80602425,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 62.35765625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 6178.571072319202,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 0.90471925,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 64.44984160506864,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"FrbSse\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 8838.792372881357,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 2.039559,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 40.7385132297354,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 5634.1525,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 1.300623,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 287.2082794307891,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Protobuf\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 31804.578125,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.857882606588045,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2640.195,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Input\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 266131.625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"0\",\"platform\":\"Macos\"}",
            "value": 3.295270352364824,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"10000\",\"platform\":\"Macos\"}",
            "value": 2599.38625,
            "unit": "Microseconds"
          },
          {
            "name": "{\"area\":\"PureDart\",\"task\":\"Blob\",\"approach\":\"Json\",\"direction\":\"Output\",\"asynchronous\":false,\"arg\":\"1000000\",\"platform\":\"Macos\"}",
            "value": 298295.28571428574,
            "unit": "Microseconds"
          }
        ]
      }
    ]
  }
}