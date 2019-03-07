var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js');
document.head.appendChild(jQueryScript);



var myList = new Array();
var BookId = "9788522126859"; //document.URL.substr(49,13);
var InitPage = 398381983;
var MaxPages = 200;
var MaxResolution = "800";
//melhorar func
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.setRequestHeader(
		"authority", "jigsaw.vitalsource.com",
		"method", "GET",
		"path", "/books/9788522126859/pages/398381984/content?create=true",
		"scheme", "https",
		"accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng",
		"accept-encoding", "gzip, deflate, br",
		"accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control", "max-age=0",
		"cookie", "__cfduid=dd3f2462275e9779fb89a347d1e0892c11550980020; jig_isbns=IntcImlzYm5zXCI6W1wiOTc4ODUyMjEyNjg1OVwiXSxcImd1aWRcIjpcIjM3VlY4OFNQTUVFSjc1TUNWM0U1XCJ9Ig%3D%3D--0f1ab65179350510ee4c128b6a8ff5aa18c6d417b8c8c56d0fdb4dcd12ac5650; reese84=3:3ynQJrkQmyxKwTCmUdNtOQ==:w4pKCJvx5ZY2Vm8dfFNJ9XFxIiW7JE17U1JIBvXKIeBjLuGkW7pB6lpXxUPg9KhhP0eF3gt7qzvVt5atZaQsOwFIDvDCniyKYsc19tbM10cJN0UHSe76rsXIZEhYqmRXg5620IRT3OpBVZVb4bj8iZxdNQPqVuV4WskPyDG/NLAsKS5dHwaG8nw9SBhngtoOQjk1Lz/afrrzY33Ish+qCIBdxoNBPRvJS7b7dxBZp6k8nb+z0Q59253HrCxkKNk0KEISu2MfUn0kFbww5U3mUOIPzC7lNoXHaT1HMnUMvOsEGZrq/fQwUdahsodHjuvk:BT6YfrDnQHtSr5Ghk1G7ed2zgbz2dwFGTHtwQNQwE74=; _jigsaw_session=Z01oT0VXWDhNaHVyVUU3UGJ6T283dy96K2JCdHIxNTJjNE9IaW5XQmVjd3FJMVNXRG1tM0h2R1RTNnpuWGdLUFNtMzlhMHRaTTNQZHNDaTFGK1l1di9teTk2WkFqbmpoK052cnZNcC9hbzRjODk4T0FLMFRQekR3R0puZnVPUFJmeURpT0MyeHR1TVhiL0pGTkRDKzZXUC9JK01OZ05PVHA5YmdYcWpPNGZ2VWU0c3NqY05wS0NiWEFvR0RZczdXNkNIanFjb2hBWExiRTdtb1A1Y2RQQmNtVXFBR3huSkd2KzUvb2Joc0pBS29rVml0ZE0zQVYvVE9lUW4vamh2MUxteFU4MnhXb3A3V1dZODEySm4vdi9SZVBLU2tqQWE2TWZsOS9kNnhNcGUrZ044Z2Q4SG90cEpwbU5hclR3Q2RFZlRoZXlNbjdOUUZGVDhtMXRHcHpkTTB2bkpXY0Rab0V5Z1UvV1pSNUREM04venJVbGovWWJXdmNmakttQzd2b25VU1dVbHRqM2llZksycnVTaGVHMnF3blkwMzl2a2tpTXYzSkIzNldSdThXcnJNMXd6VzZlMEdISXdyZ3piby0tK1pxYXFuS01iQjJEOGwxNDd0UjcvUT09--9eeb9097e1ad7edca42b5b390cd04c4c198eb07c",
		"origin", "http://evil.com/",
		"upgrade-insecure-requests", "1",
		"user-agent", 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36 "cookie","__cfduid=dd3f2462275e9779fb89a347d1e0892c11550980020; jig_isbns=IntcImlzYm5zXCI6W1wiOTc4ODUyMjEyNjg1OVwiXSxcImd1aWRcIjpcIjM3VlY4OFNQTUVFSjc1TUNWM0U1XCJ9Ig%3D%3D--0f1ab65179350510ee4c128b6a8ff5aa18c6d417b8c8c56d0fdb4dcd12ac5650; reese84=3:XYGVuucCZKSOReOMjA+JGw==:+BynfYgTZfPemBZZm1drBNDK7VXMzBCyqPGm0vjUVyKH0cD2LlifImI7lps/u2ozjXiFdjFme57tC+QiDGET/1ciOVt7UZZTaZ/2xynAMqIikHKhdT/ZhCIgaX4TyLl5tVgnEG9wdfz7+llIR9VjeEKfosA0DkES4VbgHrR/hdh13r4P96EIJ9BMj1s9Z4CXpV5cojh7FxoQEU7Q9AmRUccs0ueIPBePtH+fqQYlXEkgRItDzXptgRtulJI4c/m8L8swxo8o44CPU++a70IlcWlP6SAjJNJfRZg3Od899kIyYoh1OcfIMUfGysGo5aIE:Ayd0y3KPycd0lbkVy/Wj8FdG1PSH66XaVqCVjFZ8mlQ=; _jigsaw_session=UUNtQ3JnTTYvNTZrL0J5M01kKzZGeTB1cWc5bHJBMlJhWFZlZGlNdFRFclRmUmZzVmxOWXZzOFdqZTJsMXRGUkgva3lRRXNweXJ2N0tIY0NtdERaUkR0bnFyM2FHRHNNcC9mNnJnTm05VkV6VGN2OWVMQktvR3JTMmVCMWFZZE1od0YvVUlYL2QzUGJUSUQzbmxDSllYR2d1cXRwck5yVmVEREZ3Y0d6MkhVd2kwTjdobVBPZEg2dzRaMEF6elZVK05VcGVCWkNwTE5OTy9EcTVRc2JhMlowV0d5UFY3YUtqa0ErTDg5VmFZeFRoR3o4VXpNZzNESDJXcVR3TmNwK3dNOHNsR3pXbU82R21POUdxYjBYTGo2VzlWcDlQNVNoeWxOcWQzUGFhQ0t2YnBVWXNHNjdjY0MwdGlFa2x4aVRKOGV6eENlenVKc1owaFU2Um5LTS9mMWRNbUFTMElWQkp4eXJGeHl2VzR2R1Z6K0Nta05va0gxd0JDbDdQRW54RW5tVXJkWnhGWmcrZGhEUmVpWjFLK3JUeDdNWWswd25IVEZtYk4yZGVMK0tRZm1KblB4WXBXTldIRFFWYys3bi0tT2d5M0NnTGRKcVVzVXoyeWRpN0xBdz09--1ac6549c1180a344b04f70b9286c1b1cdf4735a2'
	 
		 );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function ist()
{
	for(i = 99; i <= MaxPages;i++)
	{
		var FUrl = "https://jigsaw.vitalsource.com/books/" + BookId + "/pages/" + (InitPage + i).toString() + "/content?create=true"
		var req = httpGet(FUrl);
		var lll = req.match(/<img([\w\W]+?)\/>/g);
		if (lll != null)
		{
			lll = lll[0].match(/src="([\w\W]+?)"/g);
			FUrl = "https://jigsaw.vitalsource.com" + lll[0].substr(5,999);
		}
		else
		{
			FUrl = "https://jigsaw.vitalsource.com/books/" + BookId;
		}
		var str = FUrl.slice(0,FUrl.length-1);
		if (!isNaN(str.substr(str.length - 4)))
		{
			var arr = str.split('/');
			arr.splice(8,4,MaxResolution)
			FUrl = arr.join('/');
			console.log(FUrl);
		}
		else if (!isNaN(str.substr(str.length - 3)))
		{
			var arr = str.split('/');
			arr.splice(8,4,MaxResolution)
			FUrl = arr.join('/');
			console.log(FUrl);
		}
		else if (!isNaN(str.substr(str.length - 5)))
		{
			var arr = str.split('/');
			arr.splice(8,4,MaxResolution)
			FUrl = arr.join('/');
			console.log(FUrl);
		}
		myList.push(FUrl);
	}
}
function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	if(img.width != null && img.height != null)
	{
		canvas.width =  img.width;
		canvas.height = img.height;
	}

	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	var dataURL = canvas.toDataURL("image/png");
	return dataURL;
}

	
var doc = new jsPDF("p", "mm", "a4");
 for (var i = 0; i < 100; i++) {
	(function(i) {
			setTimeout(function() 
			{ 
				var img = new Image();
				img.src = myList[i];
				var imgData = getBase64Image(img);
				console.log(img);
				doc.addImage(imgData,'JPEG', 0, 0, 210,297);
				doc.addPage();
				console.log("Lendo pagina: " + i);
			}, 500 * i);
	})(i);
}
doc.save('calculo1_parte 1.pdf');




https://jigsaw.vitalsource.com/books/9788522126859/pages/398382020/content?create=true#cfi=/37!/4/2@100:0.00
https://jigsaw.vitalsource.com/books/9788522126859/cfi/37!/4/4@0.00:0.00?jigsaw_brand=integradaminhabiblioteca&xdm_e=https%3A%2F%2Fintegrada.minhabiblioteca.com.br&xdm_c=default134&xdm_p=1

//necessário para urls
