import { useState } from "react";
import {InputBox} from './components/InputBox';
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App (){
    
    const [amount,setamount] = useState(0)
    const [from,setFrom] = useState("usd")
    const [to,setTo] = useState("inr")
    const [convertedAmount,setConvertedAmount] = useState(0)
    
    const currencyInfo = useCurrencyInfo(setFrom)
    
    console.log(currencyInfo)
    const  options = Object.keys(currencyInfo)
    

    // this is the value that should be passed to the currency option parameter in the inputBox file.

    const swap = () =>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setamount(convertedAmount)
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    // the above statement is where the amount gets converted
    }
    
    
    
    
    return (
        <div
            className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532556/pexels-photo-3532556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setamount(amount)
                                }
                                selectCurrency = {from}
                                onAmountChange = {(amount) => setamount(amount)}
                                

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                            
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={ (currency) =>
                                    setTo(currency)
                                }
                                selectCurrency = {from}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App