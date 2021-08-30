export default interface List {

    list(subscription: string): Promise<any>;
}