const exports = {
    // default endpoint, can create many or other controller javascript files
    getData(request, response) {
        response.send({
            success: "ok",
            data: [
                {
                    name: 'Rafa'
                }
            ]
        });
    }
};

export default exports;