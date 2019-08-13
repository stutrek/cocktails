import React from 'react';

export default function DrinkTable({fields, exclusions, cocktails}) {
	const fieldsToUse = fields.filter(field => exclusions.has(field.key) === false && cocktails.find(c => c[field.key]) !== undefined);
	
	return <table>
		<thead>
			<tr>
				{fieldsToUse.map(field => <td key={field.key}>{field.title}</td>)}
			</tr>
		</thead>
		<tbody>
			{cocktails.map(cocktail => <tr key={cocktail.name}>
				{fieldsToUse.map(field => {
					if (field.value) {
						return <td key={field.key}>
							{cocktail[field.key] && field.value}
						</td>;
					} else {
						return <td key={field.key}>
							{cocktail[field.key]}
							{field.hasNotes && cocktail[`${field.key}Notes`] && <span>({cocktail[`${field.key}Notes`]})</span>}
						</td>
					}
				})}
			</tr>)}
		</tbody>
	</table>
}