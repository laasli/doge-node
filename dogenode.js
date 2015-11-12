'use strict';
var clc = require('cli-color');
var _ = require('lodash');
var Doge = function() {

/* DISCLAIMER:
  Default color is still yellowBright, 
  please refer to: 
  https://github.com/medikoo/cli-color#colors
  for the available options.
*/

  this.suchDogeMuchAscii = function(suchConfig){
    var suchConfig = _.assign({
      cls: true
    }, suchConfig);

    var soString = "\
                      Y.                      _ \n\
                      YiL                   .```. \n\
                      Yii;       WOW      .; .;;`. \n\
                      YY;ii._           .;`.;;;; : \n\
                      iiYYYYYYiiiii;;;;i` ;;::;;;; \n\
                  _.;YYYYYYiiiiiiYYYii  .;;.   ;;; \n\
               .YYYYYYYYYYiiYYYYYYYYYYYYii;`  ;;;; \n\
             .YYYYYYY$$YYiiYY$$$$iiiYYYYYY;.ii;`.. \n\
            :YYY$!.  TYiiYY$$$$$YYYYYYYiiYYYYiYYii. \n\
            Y$MM$:   :YYYYYY$!\"``\"4YYYYYiiiYYYYiiYY. \n\
         `. :MM$$b.,dYY$$Yii\" :'   :YYYYllYiiYYYiYY \n\
      _.._ :`4MM$!YYYYYYYYYii,.__.diii$$YYYYYYYYYYY \n\
      .,._ $b`P`     \"4$$$$$iiiiiiii$$$$YY$$$$$$YiY; \n\
         `,.`$:       :$$$$$$$$$YYYYY$$$$$$$$$YYiiYYL \n\
          \"`;$$.    .;PPb$`.,.``T$$YY$$$$YYYYYYiiiYYU: \n\
          ;$P$;;: ;;;;i$y$\"!Y$$$b;$$$Y$YY$$YYYiiiYYiYY \n\
          $Fi$$ .. ``:iii.`-\":YYYYY$$YY$$$$$YYYiiYiYYY \n\
          :Y$$rb ````  `_..;;i;YYY$YY$$$$$$$YYYYYYYiYY: \n\
           :$$$$$i;;iiiiidYYYYYYYYYY$$$$$$YYYYYYYiiYYYY. \n\
            `$$$$$$$YYYYYYYYYYYYY$$$$$$YYYYYYYYiiiYYYYYY \n\
            .i!$$$$$$YYYYYYYYY$$$$$$YYY$$YYiiiiiiYYYYYYY \n\
           :YYiii$$$$$$$YYYYYYY$$$$YY$$$$YYiiiiiYYYYYYi \n\
    ";

    if( suchConfig.cls )
      process.stdout.write(clc.erase.screen);

    if( _.isUndefined(suchConfig.color))
      process.stdout.write(soString);
    else
      process.stdout.write(clc[suchConfig.color](soString));
  };

  this.iicsAhcuMegoDhcus = function (gifnoChcus) {
    var gifnoChcus = _.assign({
      slc: true
    }, gifnoChcus);


    var gnirtSos = "\
              _                      .Y \n\
            .```.                   LiY \n\
           .`;;. ;.      WOW       ;iiY \n\
           : ;;;;.`;.           _.ii;YY \n\
           ;;;;::;; `i;;;;iiiiiYYYYYYii \n\
           ;;;   .;;.  iiYYYiiiiiiYYYYYY;._ \n\
           ;;;;  `;iiYYYYYYYYYYYYiiYYYYYYYYYY.  \n\
           ..`;ii.;YYYYYYiii$$$$YYiiYY$$YYYYYYY. \n\
          .iiYYiYYYYiiYYYYYYY$$$$$YYiiYT  .!$YYY: \n\
         .YYiiYYYYiiiYYYYY4\"``\"!$YYYYYY:   :$MM$Y \n\
          YYiYYYiiYllYYYY:   ': \"iiY$$YYb,.d$$MM: .` \n\
          YYYYYYYYYYY$$iiib.__.,iiYYYYYYYYY!$MM4`: _.._ \n\
         ;YiY$$$$$$YY$$$$iiiiiiii$$$$$4\"     `P`d$ _.,. \n\
        LYYiiYY$$$$$$$$$YYYYY$$$$$$$$$:       :$`.,` \n\
       :UYYiiiYYYYYY$$$$YY$$T``.,.`$dPP;.    .$$;`\" \n\
       YYiYYiiiYYY$$YY$Y$$$;d$$$Y!\"$y$i;;;; :;;$P$; \n\
       YYYiYiiYYY$$$$$YY$$YYYYY:\"-`.iii:`` .. $$iF$ \n\
      :YYiYYYYYYY$$$$$$$YY$YYY;i;;.._`  ```` dr$$Y: \n\
     .YYYYiiYYYYYYY$$$$$$YYYYYYYYYYbiiiii;;i$$$$$: \n\
     YYYYYYiiiYYYYYYYY$$$$$$YYYYYYYYYYYYY$$$$$$$` \n\
     YYYYYYYiiiiiiYY$$YYY$$$$$$YYYYYYYYY$$$$$$!i. \n\
     'iYYYYYYiiiiiYY$$$$YY$$$$YYYYYYY$$$$$$$iiiYY: \n\
    ";

    if( gifnoChcus.slc )
      process.stdout.write(clc.erase.screen);

    if(_.isUndefined(gifnoChcus.roloc))
      process.stdout.write(gnirtSos);
    else
      process.stdout.write(clc[gifnoChcus.roloc](gnirtSos));
  };
};

module.exports = new Doge();