<?php
/**
 * Title: Template blog page
 * Slug: frontis/template-blog
 * Categories: pages
 * Keywords: page sidebar
 * Inserter: false
 */

?>
<!-- wp:group {"metadata":{"name":"Blog Page"},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:post-title {"textAlign":"center","level":1,"style":{"spacing":{"margin":{"top":"var:preset|spacing|spacing-64","bottom":"var:preset|spacing|spacing-64"}}},"fontSize":"h2"} /-->

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"right":"var:preset|spacing|spacing-32","left":"var:preset|spacing|spacing-32","bottom":"var:preset|spacing|spacing-120"},"margin":{"top":"0","bottom":"0"},"blockGap":"0"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide" style="margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--spacing-32);padding-bottom:var(--wp--preset--spacing--spacing-120);padding-left:var(--wp--preset--spacing--spacing-32)"><!-- wp:query {"queryId":39,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":null,"parents":[],"format":[]},"align":"wide","layout":{"type":"default"}} -->
<div class="wp-block-query alignwide"><!-- wp:post-template {"layout":{"type":"grid","columnCount":2}} -->
<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/2","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|spacing-24","top":"0","left":"0","right":"0"},"padding":{"bottom":"0","top":"0","right":"0","left":"0"}}}} /-->

<!-- wp:post-terms {"term":"category","className":"is-style-FWP_-post-terms-pill","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"},"padding":{"top":"0","bottom":"0","left":"0","right":"0"}}}} /-->

<!-- wp:post-title {"isLink":true,"style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}},"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"var:preset|spacing|spacing-16","right":"0","bottom":"var:preset|spacing|spacing-24","left":"0"}}},"textColor":"heading","fontSize":"h6"} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|spacing-8"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:post-author {"isLink":true,"className":"is-style-FWP_-post-author-elegant-author","style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}}},"textColor":"heading","fontSize":"p-2"} /-->

<!-- wp:post-date {"className":"is-style-FWP_-post-date-custom-style","style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}}},"textColor":"heading","fontSize":"p-2"} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:separator {"className":"is-style-wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|spacing-48","bottom":"var:preset|spacing|spacing-48"}}},"backgroundColor":"primary-100"} -->
<hr class="wp-block-separator has-text-color has-primary-100-color has-alpha-channel-opacity has-primary-100-background-color has-background is-style-wide" style="margin-top:var(--wp--preset--spacing--spacing-48);margin-bottom:var(--wp--preset--spacing--spacing-48)"/>
<!-- /wp:separator -->

<!-- wp:query-pagination {"paginationArrow":"arrow","style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}}},"textColor":"heading","fontSize":"p-1","layout":{"type":"flex","justifyContent":"center"}} -->
<!-- wp:query-pagination-previous /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination --></div>
<!-- /wp:query --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->