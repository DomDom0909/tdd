<?php $page_title = "Home ★ Productive"; ?>
<?php require "view/blocks/page_start.php"; ?>
<h1>Welcome to Productive!</h1>

<table>
    <thead>
        <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th></th>
        </tr>
    </thead>
    <tbody id="products-table"></tbody>
</table>

<script src="controller/home-products.js"></script>
<?php require "view/blocks/page_end.php"; ?>