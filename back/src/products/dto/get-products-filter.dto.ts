export class GetProductsFilterDto {
    name: string;
    description: string;
    color: string;
    weightRule: NumberFilterRule;
    weight: number;
    priceRule: NumberFilterRule;
    price: number;
    active?: boolean;
}

export enum NumberFilterRule {
    GREAT_THEN = '>',
    LOWER_THEN = '<',
    LOWER_OR_EQUAL = '<=',
    GREAT_OR_EQUAL = '>=',
    EQUALS = '=',
}
