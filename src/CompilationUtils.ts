function wrapHTML(tag: string, content: string, params: { [key:string]: string}): string {
    var params_string = Object.keys(params).reduce(
        (acc, cur, _) => { return acc + " " + cur + "=" + params[cur] },
        " "
    )
    return "<" + tag + params_string + ">" + content + "</" + tag + ">"
}