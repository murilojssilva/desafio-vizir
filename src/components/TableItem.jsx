import data from "../../data.json"


export function TableItem() {
	let tax = 0.0;
	let valueWith = 0.0;
	let valueWithout = 0.0;
	return (
		<>
			{data.map((item, index) => {
				return (
					<tr key={index}>
						<td>{item.origin}</td>
						<td>{item.destiny}</td>
						<td>{item.time}</td>
						<td>{item.plain}</td>
						<td>
							{(item.origin === "011" && item.destiny === "016") || (item.origin === "018" && item.destiny === "011") ? tax = 1.90 :
								item.origin === "016" && item.destiny === "011" ? tax = 2.90 :
									item.origin === "011" && item.destiny === "017" ? tax = 1.70 :
										item.origin === "017" && item.destiny === "011" ? tax = 2.70 :
											item.origin === "011" && item.destiny === "018" ? tax = 0.90 :
												tax = 0.0
							}
						</td>
						<td>{
							item.time > 30 && item.plain === "FaleMais 30" ? valueWith = (((item.time - 30) * 1.1) * tax).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) :
								item.time > 60 && item.plain === "FaleMais 60" ? valueWith = (((item.time - 60) * 1.1) * tax).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) :
									item.time > 120 && item.plain === "FaleMais 120" ? valueWith = (((item.time - 120) * 1.1) * tax).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) :
										valueWith = 0.0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
						}</td>
						<td>{(valueWithout = item.time * tax).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
					</tr>
				)
			})}
		</>
	)
}

