function promiseNoData(promiseState) {
    if (!promiseState.promise) {return <div className="loader"></div>;}
    if (promiseState.promise && !promiseState.data && !promiseState.error) {
        return(<div className="loader"></div>);}
        if (promiseState.promise && !promiseState.data && promiseState.error) {
        return (<div>{String(promiseState.error)}</div>);}
    if (promiseState.promise && promiseState.data && !promiseState.error) {
        return false;}}


export default promiseNoData;