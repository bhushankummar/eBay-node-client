'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

var userRequest = async function () {
    try {
        var options = {
            access_token: 'v7.1#i7#p^3#f^0#I^3#r^0#t^H4sIAAAAAAAAAOVXa2wUVRTu9sGrIAkSkGriOpgQITM7d3ZnZ2eg22xf0ABt6baIEGzvzpxph87ObObOtt0fxKYmRYkgsTEGAeWR9A+BgOGPkfKjFU1ATA1RgwkkakSjMfGFpojRO9sHbY2ALiRN3D+Te+65557vO989ey/fPWvuyt51vb8t8M3OP9zNd+f7fKiYnzuraNVDBfklRXn8JAff4e4nuwt7Cr5ZQ3DSTCkNQFK2RcDflTQtomSNpUzasRQbE4MoFk4CUVxVicc2blAEjldSju3aqm0y/prKUiYUlCO6wEfEYFALyZJOrdZ4zEa7lIlEQAzJoVA4JIVBlsJ0npA01FjExZZbygg8irBIYFGwEQkKLypI4sJhaSvj3wwOMWyLunA8E82mq2TXOpNyvXOqmBBwXBqEidbEquN1sZrKqtrGNYFJsaJjPMRd7KbJ1FGFrYF/MzbTcOdtSNZbiadVFQhhAtHRHaYGVWLjyfyH9LNUQxAAY10LY02K8CH5vlBZbTtJ7N45D89iaKyedVXAcg03czdGKRuJHaC6Y6NaGqKm0u99NqWxaegGOKVMVXnsmaZ4VQPjj9fXO3aHoYHmIUXBkBCMSCJioi4QSiE4zYm2NGnDVns6iR3TMHEKO3hs39HgY6xP27jCtjTD45D4a223HCgImEoVUsRJVFGnOqvOiemul+Bkv9A4pWJoq1fj0aKm3TbLKzMkKS/+7PDuBRlXyG1N3C+NiLoEcgIAJFFVEUKM3zvruesk6pUqVl8f8HKBBM6wtAzt4KZMrAKrUnrTSXAMTQmKOi2dDqwWlnU2JOs6mxC1MIt0AB4gkVDlyP9YLq7rGIm0CxOSmT6RxUzPOqVYMbCuuHY7WI2ZFDDTPbONaUwnXaSUaXPdlBIIdHZ2cp1BznZaAwLPo8CWjRviahskMTPha9zdmTWyalGBriKG4tIESpkuKki6udXKRBuqqhuq4uuaG+vWV9WOi3lKZtHp1n9AGlftFNTbpqFmZhbEoKPVY8fNlKczdBwH06SfnKASD+qDBOmd9X8P1ItBaBCcMjhPd5xqJwM2pq3MMzVnsw4Qip8zrA4qWdvJ+O9pDbXRpqACp2IXm3Yr5wDWbMvM5MRiLJWqSSbTLk6YUKPNMM2gMPXPGd4MQ1U+1kvZSkjaNL9qNl6+hRXDvBoUEIisKGgaj4HPCbcGHYYKzcYMw26lTTMnXJXQ8UDqSc96IgdcegQimizKrCbJMhvSBcwmEAqy4WBCS9Cruo5CudVzY+tMK2VtIJYTogrToN1v5v0Xr7OJC1pu0OgdcmaB8jrMeIOREQgsDksiGxIAsXIYJFaQZOFeIU8zTLp7/e0WHpj6Ko7mZX+oxzfA9/jepg9rXuJZtIp/alZBU2HBfIYYLnAEW1rC7uLofY0jRqtFH30OcO2QSWHDyZ/l2/bot2W3Jr3HD2/nH5l4kc8tQMWTnuf8Y7dnitDCpQtQBAkoiAReRNJWfvnt2UK0pHDx4OfFv7YsvzZ4K/JexdqeyyXH5jf9xC+YcPL5ivIKe3x5b1y8tP2FPr73s6ELLfg4s231zZGROY9/sLc3/92SwVeadpJ3nj5f2fjW8EAvI50/MKfF131ucefxN38/cnnFntmb6p69+eUp++oTD1/YFP4Kjp3c1bN/2cii4UEt/sfSbfmLRq7v3XkNPYf69hXOa97tf+lES+OyoVun++s6D9Se2O07efHVD5vaubJ91wfOVvu+uHrozCHcJCvJn62Bhf1l+8t/eTldRC4dXXrtYDF/WR0S532nrOjfsb6l70je60v6TpErPxx6Mfp+3cDB04udXcfX/vna2ZUfLbvxvPbpmbWrhZGPixe13zhSO9R//ZMAfM8eLeN+vPGqdm74a3JCW73fHS7Zw/Re8Y2W8S9LNhvtKREAAA==',
            refresh_token: 'v7.1#i7#f^0#p^3#r7#I^3#t^Ul4xMF8wOkJFNDYxN0FFQzQxMjMxRDZCRkQ3RTNCNTQwMzFDNDM5XzJfMSNFXjEyODQ='
        };
        var response = await eBay.user.refreshUserToken(options);
        console.log('refreshedToken ', response);
    } catch (error) {
        console.log('error ', error);
    }
};
userRequest();
