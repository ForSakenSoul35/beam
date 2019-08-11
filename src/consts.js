export const ResourceTypes = {
  DataBuffers: 'DataBuffers',
  IndexBuffer: 'IndexBuffer',
  Uniforms: 'Uniforms',
  Textures: 'Textures',
  OffscreenTarget: 'OffscreenTarget'
}

export const SchemaTypes = {
  vec4: 'vec4',
  vec3: 'vec3',
  vec2: 'vec2',
  int: 'int',
  float: 'float',
  mat4: 'mat4',
  mat3: 'mat3',
  mat2: 'mat2',
  tex2D: 'tex2D',
  texCube: 'texCube'
}

export const GLTypes = {
  triangles: 'triangles',
  lines: 'lines',
  rgb: 'rgb',
  rgba: 'rgba',
  srgb: 'srgb'
}

export const RendererConfig = {
  contextAttributes: {},
  extensions: ['OES_element_index_uint']
}
