

import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({ fname: "", age: "", email: "", Password: "" });

  const [data, setData] = useState(JSON.parse(localStorage.getItem("dropsort")) || []);

  const [selected, setSelected] = useState("");


  const handleChange = (e) => {
    console.log(e.target.name)
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setData([...data, person])
    localStorage.setItem("dropsort", JSON.stringify([...data, person]));
  }
  console.log(data);
  console.log(person);


  // const sortbyFname = () => {

  //   const sortdata = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });
  //   console.log(sortdata);
  //   setData([...sortdata]);

  // }

  const sortByFname = useMemo(() => {

    if (selected === "w") {
      return data.sort((a, b) => {
        return (a.fname > b.fname ? 1 : -1)
      })
    }

    else if (selected === "x") {
      return data.sort((a, b) => {
        return (a.age - b.age)
      })
    }

    else if (selected === "y") {
      return data.sort((a, b) => {
        return (a.email > b.email ? 1 : -1)
      })
    }

    else if (selected === "z") {
      return data.sort((a, b) => {
        return (a.Password > b.Password ? 1 : -1)
      })
    }
    return data;

  }, [data, selected]);


  return (
    <>
      <div className=''>

        <div style={{ backgroundImage: 'url(https://i.pinimg.com/736x/19/b3/79/19b37933986119a2e81c65db84e95be9.jpg)', height:'955px', backgroundSize: "cover", display:'flex', alignItems:"center", justifyContent:'center' }}>

          <div className='flex flex-col items-center gap-[60px] mt-[5%]'>

            <div className='tanu flex gap-[20px]'>
              <label htmlFor="fname" className='font-bold text-2xl text-[#696237]'>Full Name:</label>
              <input type="text" id="fname" name="fname" value={person.fname} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#c8a05a] text-[#696237] font-bold text-base' />
            </div>

            <div className='tanu flex gap-[20px]'>
              <label htmlFor="age" className='font-bold text-2xl text-[#696237]'>Age:</label>
              <input type="number" id='age' name="age" value={person.age} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#c8a05a] text-[#696237] font-bold text-base' />
            </div>

            <div className='tanu flex gap-[20px]'>
              <label htmlFor="email" className='font-bold text-2xl text-[#696237]'>E-mail:</label>
              <input type="email" id='email' name="email" value={person.email} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#c8a05a] text-[#696237] font-bold text-base' />
            </div>

            <div className='tanu flex gap-[20px]'>
              <label htmlFor="Password" className='font-bold text-2xl text-[#696237]'>Password:</label>
              <input type="password" id="Password" name="Password" value={person.Password} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#c8a05a] text-[#696237] font-bold text-base' />
            </div>

            <button type='submit' onClick={handleSubmit} className='font-bold text-2xl h-[50px] w-[150px] mt-[30px] rounded-[10px] bg-transparent text-[#696237] border-[#c8a05a]' >Submit</button>

          </div>

        </div>

        <div className='flex justify-center mt-[5%]'>
          <select onChange={(e) => setSelected(e.target.value)} className='h-[40px] w-[180px] bg-transparent text-[16px] font-bold text-[#696237] border-[#c8a05a] border-2 rounded-[10px]'>
            <option value="">Select Field:</option>
            <option value="w">Full Name</option>
            <option value="x">Age</option>
            <option value="y">E-mail</option>
            <option value="z">Password</option>
          </select>
        </div>

        <div className='flex justify-center mt-[5%]'>

          <table>

            <thead>
              <th>Full Name:</th>
              <th>Age:</th>
              <th>E-mail</th>
              <th>Password:</th>
            </thead>

            <tbody>
              {sortByFname?.map((item, index) => {
                return (
                  <tr>
                    <td>{item.fname}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.Password}</td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

      </div>

    </>
  );
}

export default App;