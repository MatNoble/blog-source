import os
import re

core_keywords = [
    'LaTeX排版',
    'LaTeX Typesetting',
    '数学公式编辑',
    '科技论文写作',
    'MatNoble',
    'LaTeX Tutorial'
]

directory = r'content/zh/tech/latex'

print(f"Scanning directory: {directory}")

for filename in os.listdir(directory):
    if filename.endswith('.md'):
        filepath = os.path.join(directory, filename)
        # print(f"Processing {filename}...")
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Modified Regex: Removed ^ anchor, added multiline flag just in case
            match = re.search(r'\+\+\+(.*?)\+\+\+', content, re.DOTALL)
            
            if match:
                frontmatter = match.group(1)
                
                # Find keywords line
                keywords_match = re.search(r'keywords\s*=\s*\[(.*?)\]', frontmatter, re.DOTALL)
                
                current_keywords = []
                if keywords_match:
                    raw_list = keywords_match.group(1)
                    current_keywords = [k.strip().strip('"').strip("'") for k in raw_list.split(',') if k.strip()]
                
                new_keywords = []
                # Add existing
                for k in current_keywords:
                    if k not in new_keywords:
                        new_keywords.append(k)
                # Add core
                for k in core_keywords:
                    if k not in new_keywords:
                        new_keywords.append(k)
                
                new_keywords_str = 'keywords = [' + ', '.join([f'\"{k}\"' for k in new_keywords]) + ']'
                
                if keywords_match:
                    new_frontmatter = frontmatter.replace(keywords_match.group(0), new_keywords_str)
                else:
                    new_frontmatter = frontmatter.rstrip() + '\n' + new_keywords_str + '\n'
                
                new_content = content.replace(f'+++{frontmatter}+++', f'+++{new_frontmatter}+++')
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Updated {filename}')
                else:
                     print(f'Skipped {filename} (No changes needed)')
            else:
                print(f"Warning: No Frontmatter found in {filename}")

        except Exception as e:
            print(f"Error processing {filename}: {e}")