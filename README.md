hexo-amazon-jp-link
==============

Generate a link for amazon.co.jp for hexo.

### Installation

Please execute the following command in your hexo project root:

```bash
npm install hexo-amazon-jp-link --save
```

### Usage

#### Generate Link tag

```md
{% AmazonJpLink B01N59VNQY johndue-22 macOS Sierra %}
```

Generate the following html:

```html
<a href="http://www.amazon.co.jp/gp/product/B01N59VNQY/ref=as_li_qf_sp_asin_il?ie=UTF8&amp;camp=247&amp;creative=1211&amp;creativeASIN=B01N59VNQY&amp;linkCode=as2&amp;tag=johndue-22" target="_blank">
  macOS Sierra
</a>
<img src="http://www.assoc-amazon.jp/e/ir?t=johndue-22&amp;l=as2&amp;o=9&amp;a=B01N59VNQY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;">
```

#### Generate Image tag

```md
{% AmazonJpImage B01N59VNQY johndue-22 150 %}
```

Generate the following html:

```html
<a href="http://www.amazon.co.jp/gp/product/B01N59VNQY/ref=as_li_qf_sp_asin_il?ie=UTF8&amp;camp=247&amp;creative=1211&amp;creativeASIN=B01N59VNQY&amp;linkCode=as2&amp;tag=johndue-22" target="_blank">
  <img border="0" src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&amp;ASIN=B01N59VNQY&amp;Format=_SL300_&amp;ID=AsinImage&amp;MarketPlace=JP&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=johndue-22" width="150" style="float: left; margin: 0 20px 20px 0;" />
</a>
<img src="http://www.assoc-amazon.jp/e/ir?t=johndue-22&amp;l=as2&amp;o=9&amp;a=B01N59VNQY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;">
```
