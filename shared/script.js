document
	.getElementById("formulario")
	.addEventListener("submit", async function (event) {
		event.preventDefault();

		// 1. Obtener los datos del formulario
		const formData = new FormData(this);
		const data = Object.fromEntries(formData.entries());

		// 2. Enviar los datos por POST usando fetch API
		const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		// 3. Procesar la respuesta
		if (response.ok) {
			const json = await response.json();
			// 4. Guardar el JSON en localStorage
			localStorage.setItem("formResponse", JSON.stringify(json));
			alert("¡Enviado y guardado en localStorage!");
		} else {
			alert("Error al enviar el formulario");
		}
	});
