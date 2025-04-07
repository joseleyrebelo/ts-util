export const objKeys = 
	<Type extends {[key: string]: any}>(data: Type) => 
		Object.keys(data) as (keyof Type)[]; 
