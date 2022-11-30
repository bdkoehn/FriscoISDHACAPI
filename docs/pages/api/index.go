package handler

import (
	"fmt"
	"net/http"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, `
		<h1>Denton ISD HAC API</h1>
		<p>Documentation:</p>
		<a>https://fisdhacapi.netlify.app/</a>
	`)
}
