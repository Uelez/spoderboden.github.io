
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.0c53f8ce14ae70194188.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.baseline.en.ef1422c7eda796fe51b7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/320.baseline.en.02d7bef214d73a84d9b1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/991.baseline.en.da2415105f9faac8696f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a68a6283eca842fbf105.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.baseline.en.d590c77360b092302df2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/462.baseline.en.5ec9b2ac9c0d38c10b29.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/18.baseline.en.17f9af0a6a6ecd3265f0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.14a1cd838387e7de39cc.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.baseline.en.e11205b132d83ce78bf8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.7bb8e54de32f56b04cf8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.3970055027214a5e7103.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  