export default (item) => {
    console.log(item);
    if (item.is_last) {
        return '/category/child/' + item.slug;
    }
    switch (item.depth) {
        case 2:
            return "/category/sub/" + item.slug;
        case 3:
            return "/category/child/" + item.slug;
        default:
            return '/category/parent/' + item.slug;
    }
}