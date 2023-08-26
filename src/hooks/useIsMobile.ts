 const isMobile = function() {
  let  _isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
    navigator.userAgent.toLowerCase()
  );
  return _isMobile;
}
export default isMobile