function setCookie (name, value, days = 7, path = '/') {
	const encodedValue = encodeURIComponent(value);
	const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
	document.cookie = `${name}=${encodedValue}; expires=${expires}; path=${path}`
}

setCookie('name','Vinh', 7)

function getCookiesAsObject() {
	const cookies = document.cookie.split('; ');
	const cookieObj = {};

	cookies.forEach(cookie => {
		const [name, value] = cookie.split('=');
		cookieObj[name] = decodeURIComponent(value);
	});

	return cookieObj;
}

console.log(getCookiesAsObject());

function deleteCookie(name, path = '/') {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
}