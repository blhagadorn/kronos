export * from "@solo-io/proxy-runtime/proxy";
import { RootContext, Context, RootContextHelper, ContextHelper, registerRootContext, FilterHeadersStatusValues, stream_context } from "@solo-io/proxy-runtime";

class AddHeaderRoot extends RootContext {
  configuration : string;

  onConfigure(): bool {
    let conf_buffer = super.getConfiguration();
    let result = String.UTF8.decode(conf_buffer);
    this.configuration = result;
    return true;
  }

  createContext(): Context {
    return ContextHelper.wrap(new AddHeader(this));
  }
}

class AddHeader extends Context {
  root_context : AddHeaderRoot;
  constructor(root_context:AddHeaderRoot){
    super();
    this.root_context = root_context;
  }
  onResponseHeaders(a: u32): FilterHeadersStatusValues {
    const root_context = this.root_context;
    if (root_context.configuration == "") {
      stream_context.headers.response.add('X-XSS-Protection', '1; mode=block');
      stream_context.headers.response.add('X-Frame-Options', 'SAMEORIGIN');		
      stream_context.headers.response.add('X-Content-Type-Options', 'nosniff');		
      stream_context.headers.response.add('X-Download-Options', 'noopen');		
      stream_context.headers.response.add('Strict-Transport-Security', 'max-age=5184000');		
    }
    return FilterHeadersStatusValues.Continue;
  }
}

registerRootContext(() => { return RootContextHelper.wrap(new AddHeaderRoot()); }, "kronos");
