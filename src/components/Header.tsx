import styles from "../styles/components/Header.module.scss";

export function Header() {
	return (
		<div className={styles.headerContainer}>
			<div>
				<h1>Desafio <span>vizir</span></h1>
			</div>
		</div>
	)
}