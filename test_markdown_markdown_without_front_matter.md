<script src="https://cdn.jsdelivr.net/gh/magland/stan-playground-embed@main/stan-playground-embed-v2.js"></script>

This is to demonstrate how to embed stan-playground in a markdown file that can be rendered on GitHub pages.

<div>
<stan-playground-embed>
<iframe width="100%" height="500" frameborder="0"></iframe>
<script type="text/plain" class="stan-program">
data {
  int<lower=0> N;
  vector[N] x;
  vector[N] y;
}
parameters {
  real alpha;
  real beta;
  real<lower=0> sigma;
}
model {
  y ~ normal(alpha + beta * x, sigma);
}
</script>
<script type="text/plain" class="stan-data">
{
  "N": 10,
  "x": [1,2,3,4,5,6,7,8,9,10],
  "y": [
    3.5164361480858806,
    1.9422090649104387,
    3.856878064212197,
    5.8081366125433025,
    7.727339580090061,
    7.974795841003987,
    9.775364868869321,
    10.737390454859584,
    12.557258326283772,
    15.382774755732974
  ]
}
</script>
</stan-playground-embed>
</div>

If it worked, you should see an embedded Stan Playground above with a simple linear regression model and some example data.
