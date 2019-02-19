{
	"name": "BadResponseError",
	"message": "Transaction submission failed. Server responded: 400 Bad Request",
	"data": {
		"type": "https://stellar.org/horizon-errors/transaction_failed",
		"title": "Transaction Failed",
		"status": 400,
		"detail": "The transaction failed when submitted to the stellar network. The `extras.result_codes` field on this response contains further details.  Descriptions of each code can be found at: https://www.stellar.org/developers/learn/concepts/list-of-operations.html",
		"extras": {
			"envelope_xdr": "AAAAAIFz7O9tIkKK4M+u9WnV92tmnQAIpDoizqlgN+529cwIAAAAZAEJdnkAAAGmAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAJfPGPxK1FiEXOOWFTKjjfJkxDezLxUkyaM/syQAetTmAAAAAAAAAAAAB6EgAAAAAAAAAAA=",
			"result_codes": {
				"transaction": "tx_bad_auth"
			},
			"result_xdr": "AAAAAAAAAGT////6AAAAAA=="
		}
	}
}