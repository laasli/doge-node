![alt tag](https://d262ilb51hltx0.cloudfront.net/max/600/1*cYl2zTitLZeKy29x2i0ApQ.jpeg)

Illustration by [@morzzz007](http://github.com/morzzz007/)

# doge-node
simple command line doge tool. __Created just for fun.__

### how to install?

use the following command (you can use the '-g' switch to install globally):

```
npm install --save-dev doge-node
```

### how to use?

require it as you require your favourite dependencies for example:

```
var d = require('./dogenode')
```

currently there are two production ready methods to use:

```
suchDogeMuchAscii()
```

which prints out a cute little doge to your standard output

```
iicsAhcuMegoDhcus()
```
which prints out a cute little doge BACKWARDS to your standard output __(no magic required!)__


You can now pass a config object to **suchDogeMuchAscii()** function. The object looks like this:
```
{
  color: 'yellowBright',
  cls: true
}
```

If you want to pass an object to **iicsAhcuMegoDhcus()**, the object looks like this: 
```
{
  roloc: 'yellowBright',
  slc: true
}
```

(Note that these are the default values of the object.)

For the available color options please refer to: https://github.com/medikoo/cli-color#colors .

