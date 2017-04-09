hexo.extend.tag.register('AmazonJpLink', (args) => {
  const asin = args[0];
  const tag = args[1];
  const text = args[2];
  return `<a href="http://www.amazon.co.jp/gp/product/${asin}/ref=as_li_qf_sp_asin_il?ie=UTF8&camp=247&creative=1211&creativeASIN=${asin}&linkCode=as2&tag=${tag}" target="_blank">${text}</a>`
        + `<img src="http://www.assoc-amazon.jp/e/ir?t=${tag}&l=as2&o=9&a=${asin}" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`;
});

hexo.extend.tag.register('AmazonJpImage', (args) => {
  const asin = args[0];
  const tag = args[1];
  let size = args[2];
  if (!size) { size = 150; }
  return `<a href="http://www.amazon.co.jp/gp/product/${asin}/ref=as_li_qf_sp_asin_il?ie=UTF8&camp=247&creative=1211&creativeASIN=${asin}&linkCode=as2&tag=${tag}" target="_blank">`
        + `<img border="0" src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL${size * 2}_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=${tag}" width="${size}" style="float: left; margin: 0 20px 20px 0;" >`
        + '</a>'
        + `<img src="http://www.assoc-amazon.jp/e/ir?t=${tag}&l=as2&o=9&a=${asin}" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`;
});
