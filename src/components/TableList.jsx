import { TableItem } from "./TableItem"

import styles from "../styles/components/TableList.module.scss";

export function TableList() {
	return (
		<div className={styles.tableListContainer}>
			<table>
				<thead>
					<tr>
						<th>Origem</th>
						<th>Destino</th>
						<th>Tempo</th>
						<th>Plano FaleMais</th>
						<th>Taxa aplicada</th>
						<th>Com FaleMais</th>
						<th>Sem FaleMais</th>
					</tr>
				</thead>
				<tbody>
					<TableItem />
				</tbody>
			</table>
		</div>
	)
}