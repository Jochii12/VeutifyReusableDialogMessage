

const beforeEnter = async (to, _, next, root) => {
    try {
        // TODO: Apply token validaion here
        const res = await root.confirm(`Session Expire`, "Session Expire Please re-login your account", { noconfirm: true });
        if(res){
            console.log("working");
            next()
        }else{
            next()
        }
        root.dialogOptions.noconfirm = false;
    } catch (err) {
        console.error(err);
    }
}



export {
    beforeEnter,
}