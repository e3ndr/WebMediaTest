export default {
    async fetch(request) {
        const OLD_URL = "wmt.e3ndr.xyz";
        const NEW_URL = new URL(request.url).host;

        class AttributeRewriter {
            constructor(attributeName) {
                this.attributeName = attributeName;
            }
            element(element) {
                const attribute = element.getAttribute(this.attributeName);
                if (attribute) {
                    element.setAttribute(
                        this.attributeName,
                        attribute.replace(OLD_URL, NEW_URL)
                    );
                }
            }
        }

        const rewriter = new HTMLRewriter()
            .on("object", new AttributeRewriter("data"))
            .on("embed", new AttributeRewriter("src"))
            .on("param", new AttributeRewriter("value"))
            .on("a", new AttributeRewriter("href"))
            .on("link", new AttributeRewriter("href"))
            .on("script", new AttributeRewriter("src"))
            .on("img", new AttributeRewriter("src"));

        const urlToRequest = request.url.replace(NEW_URL, OLD_URL).replace("http://", "https://");
        console.log(urlToRequest);
        const res = await fetch(urlToRequest, request);
        const contentType = res.headers.get("Content-Type");

        // If the response is HTML, it can be transformed with
        // HTMLRewriter -- otherwise, it should pass through
        if (contentType.startsWith("text/html")) {
            return rewriter.transform(res);
        } else {
            return res;
        }
    },
};